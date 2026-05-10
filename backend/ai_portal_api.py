"""Backend blueprint for a future secure public health AI portal.

This file intentionally avoids calling any external AI service. It shows the
server-side boundary that would protect API keys and validate user input before
model-assisted features are enabled.
"""

from typing import Literal

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field


Audience = Literal[
    "public-health-leadership",
    "faculty-search",
    "research-collaboration",
    "industry-partnership",
    "student-learner",
]


class CollaborationRequest(BaseModel):
    audience: Audience
    topic: str = Field(min_length=3, max_length=120)
    context: str = Field(default="", max_length=2000)
    capabilities: list[str] = Field(default_factory=list, max_length=8)


class CollaborationBrief(BaseModel):
    summary: str
    questions: list[str]
    next_steps: list[str]
    safety_notice: str


app = FastAPI(title="Rauf Shah Public Health AI Portal", version="0.1.0")


BLOCKED_TERMS = {
    "patient name",
    "medical record number",
    "mrn",
    "social security",
    "date of birth",
}


def reject_sensitive_context(text: str) -> None:
    lowered = text.lower()
    if any(term in lowered for term in BLOCKED_TERMS):
        raise HTTPException(
            status_code=400,
            detail="Please remove protected or identifiable information before using this endpoint.",
        )


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/collaboration-brief", response_model=CollaborationBrief)
async def collaboration_brief(request: CollaborationRequest) -> CollaborationBrief:
    reject_sensitive_context(request.context)

    capability_text = ", ".join(request.capabilities) if request.capabilities else "general scoping"
    summary = (
        f"Draft pathway for {request.audience.replace('-', ' ')} focused on "
        f"{request.topic}. Initial capability emphasis: {capability_text}."
    )

    return CollaborationBrief(
        summary=summary,
        questions=[
            "Who is the primary decision-maker or audience?",
            "What data or evidence can be shared in de-identified form?",
            "What deliverable would be most useful in the next 30 days?",
            "What constraints, approvals, or governance issues need attention?",
        ],
        next_steps=[
            "Clarify the project objective and intended users.",
            "Identify available evidence and sensitive-data boundaries.",
            "Draft a one-page scope with timeline, roles, and deliverables.",
        ],
        safety_notice=(
            "Do not submit protected health information, identifiable patient details, "
            "or confidential organizational content."
        ),
    )
