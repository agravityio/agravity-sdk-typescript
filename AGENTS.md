# Agent Guide

This file is the workflow and discovery index for humans and coding agents.

## Instruction Precedence

Use this order when multiple guidance sources exist:

1. Direct user or task instructions
2. Azure DevOps work item for task-specific truth
3. `.specify/shared-constitution.md`
4. `.specify/constitution.md`
5. Repository workflow and navigation guidance in this file
6. Agent-specific discovery shims
7. Long-form reference documentation

## Workflow Summary

- Use Azure DevOps as the source of truth for feature and task requirements.
- Keep durable engineering guidance in the repository constitutions.
- Do not mirror ticket detail into Markdown unless it has lasting value beyond one work item.
- Ask clarification questions when repository evidence is not enough to make a safe decision.

See `.specify/constitution.md` for the durable repository rules behind these cautions.

## Entry Points

- `README.md`
- `CLAUDE.md`
- `COPILOT_INSTRUCTIONS.md`
- `.specify/shared-constitution.md`
- `.specify/constitution.md`