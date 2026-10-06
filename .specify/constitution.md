# Repository Constitution

This repository inherits `.specify/shared-constitution.md`. This file contains repository-specific durable rules only.

## Sensitive Areas

- Treat the following areas as operationally sensitive:
  - pipeline definitions
  - static web app configuration
  - portal Azure Functions configuration
  - environment-related application configuration
- Changes in these areas should be explicit, minimal, and validated against actual deployment and runtime paths.

## Canonical Local Entry Points

- `README.md` is the human entrypoint for repository overview.
- `AGENTS.md` is the workflow and discovery index.
- `CLAUDE.md` and `COPILOT_INSTRUCTIONS.md` are thin discovery shims only.
