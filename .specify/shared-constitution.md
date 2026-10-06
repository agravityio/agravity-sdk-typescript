# Shared Engineering Constitution

This file defines durable engineering and delivery rules intended to stay aligned across sibling repositories.

Repository-specific architecture, technology, naming, testing, and operational rules belong in `.specify/constitution.md`.

## Purpose

- Keep shared engineering and delivery rules in one canonical place.
- Support consistent behavior across repositories without duplicating repository-specific details.
- Optimize guidance for both human readers and multiple AI coding agents.

## Canonical Sources

- Azure DevOps work items are the primary source of truth for task and feature requirements.
- Repository Markdown files are for durable engineering guidance, architecture constraints, workflow guidance, and safety rules.
- Agent-specific entrypoint files must remain thin and should point to canonical guidance instead of duplicating it.
- When asked to remember a rule, preference, or workflow, write it into the appropriate constitution file (shared rules in `.specify/shared-constitution.md`, repository-specific rules in `.specify/constitution.md`). Never store it in an agent's own private memory, because that guidance would be invisible to other humans and agents.

## Clarify-First Rule

- Do not guess when ambiguity materially affects implementation, architecture, workflow, safety, governance, or scope.
- Ask targeted clarification questions when repository evidence or task context is insufficient.
- Prefer explicit clarification over silently encoding assumptions into canonical files.

## Ticket Truth Rule

- Keep task-specific requirements, acceptance criteria, implementation planning, and transient delivery notes in Azure DevOps whenever possible.
- Do not copy ticket content into repository Markdown by default.
- Only create or update repository Markdown when the result has durable value beyond a single work item.
- If Azure DevOps planning or AI-assistance fields are used, keep them current as work evolves.

## Documentation Minimalism

- Prefer a small number of canonical files over many overlapping Markdown files.
- New instruction files must have a durable purpose.
- Link to canonical guidance instead of copying it.
- Avoid Markdown sprawl and shadow specifications.

## Documentation Language

- The canonical documentation language across repositories is English.
- Write all durable documentation in English, including Azure DevOps work item titles and descriptions, changelog entries, and release notes — even when the surrounding conversation with a user happens in another language.

## Workflow Traceability

- Changes linked to a work item should remain traceable from branch to pull request to review and delivery.
- Preserve clear linkage between code changes and their originating work items.

## Cross-Agent Discoverability

- Important guidance must be easy for both humans and AI tools to find.
- Prefer conventional root-level entrypoints where useful, such as `README.md`, `AGENTS.md`, `CLAUDE.md`, and `COPILOT_INSTRUCTIONS.md`.
- Make instruction ownership and precedence explicit.
- If there is a tradeoff between elegant abstraction and practical discoverability, prefer discoverability.

## Validation Discipline

- Keep guidance concise, stable, and durable.
- Include relevant tests in implementation plans and add or update them alongside behavior changes.
- Validate affected code, configuration, or workflows with the repository’s normal checks before considering work complete.
- Be explicit and conservative when changing operationally sensitive areas.

## Repository Addenda Model

- Shared rules belong in `.specify/shared-constitution.md`.
- Repository-specific architecture, stack, naming, testing, and operational rules belong in `.specify/constitution.md`.
- Do not duplicate the same rule across shared and local constitutions unless repetition is necessary for safety or discoverability.