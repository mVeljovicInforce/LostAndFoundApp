# Project Guidance

## Sources of Truth

- Treat `BRD.md` as the authoritative business source and `REQUIREMENTS.md` as its checked working representation.
- If they conflict, follow the BRD unless a human has approved a change.
- Do not invent behavior to fill gaps. Identify unclear requirements and ask for a decision when it affects the work.

## Scope and Simplicity

- Keep this proportional to a small, standalone browser application using HTML, CSS, JavaScript, and browser `localStorage`.
- Do not introduce backend services, databases, authentication, external APIs, paid AI APIs, or other out-of-scope architecture.
- Keep code understandable and maintainable. Prefer small, clearly named functions over monolithic functions.
- Avoid unnecessary abstractions, frameworks, libraries, and dependencies. Both team members should be able to explain and maintain the implementation.

## Development Practices

- Before substantial changes, inspect the relevant files and requirements.
- Work in small, reviewable steps. Limit changes to what the task needs; do not modify unrelated files without a reason.
- Preserve existing working behavior when adding or changing functionality.
- Where requirements are ambiguous, surface the ambiguity rather than silently choosing behavior.

## AI-Assisted Work

- Use AI for bounded tasks and provide relevant project context for substantial requests.
- Review AI-generated code and documentation against the actual repository and source documents before accepting it.
- Ensure the team can understand and explain AI-assisted changes; prefer evidence in code and requirements over AI assumptions.
- Team members remain responsible for reviewing, understanding, testing, and accepting AI output.

## Validation

- Check changes against the relevant requirements in `REQUIREMENTS.md`.
- For behavior changes, check representative positive, negative, and boundary cases where applicable. Pay particular attention to search, status filters and their combination, form validation and submission, and `localStorage` persistence across refresh.
- Do not claim behavior works unless it has been checked. Report checks that could not be run.

## Git Collaboration

- Treat `main` as the shared integrated project state. Each team member should primarily work on their own branch.
- Keep commits reasonably small and meaningful; review changes before committing or merging.
- Resolve conflicts deliberately. Understand both sides before choosing how to combine them, and do not overwrite another team member's work without understanding it.

## Documentation

- Keep documentation consistent with the implementation and update it when a meaningful project decision changes.
- Do not document functionality that does not exist.

## Agent Boundaries

- Do not modify `BRD.md` unless a human explicitly asks.
- Do not silently change accepted requirements or add major functionality without explicit instruction.
- Do not remove working functionality merely to simplify implementation, or perform a broad rewrite when a targeted change is sufficient.

## Completion

A change is complete when it meets the relevant requirement, has been reviewed, relevant behavior has been checked, and no obvious unrelated regression has been introduced. The team should be able to explain the change.
