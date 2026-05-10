# Public Health AI Portal Backend Blueprint

This folder is a deployment-ready starting point for a future secure backend. It is not used by GitHub Pages directly.

## Purpose

- Keep AI provider API keys off the public website.
- Validate inputs before any model call.
- Reject protected health information, identifiable patient details, and confidential content.
- Return structured JSON that the static portal can render safely.

## Local Prototype

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt
uvicorn backend.ai_portal_api:app --reload
```

## Production Notes

- Store API keys in environment variables, never in the repository.
- Add authentication or rate limits before opening public model endpoints.
- Keep logs minimal and avoid storing user-submitted sensitive text.
- Use a managed host such as Render, Fly.io, Azure Functions, AWS Lambda, or a private institutional service.
