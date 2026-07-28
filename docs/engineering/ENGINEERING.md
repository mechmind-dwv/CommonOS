# CommonOS Engineering Guide

## Branch Strategy

main
- Always stable.
- Protected branch.

feature/*
- New functionality.

fix/*
- Bug fixes.

refactor/*
- Internal improvements.

docs/*
- Documentation only.

---

## Commit Convention

feat:
fix:
refactor:
docs:
build:
ci:
test:
perf:
chore:

---

## Definition of Done

A task is complete only if:

- Code compiles.
- Typecheck passes.
- Tests pass.
- Documentation updated.
- No TODOs introduced.
- CI passes.

---

## Pull Requests

Every PR must include:

- Purpose
- Technical summary
- Breaking changes
- Testing performed

---

## Architecture Principles

1. Kernel first.
2. Modules depend on contracts.
3. No circular dependencies.
4. Public APIs are stable.
5. Composition over inheritance.
6. Dependency Injection preferred.
7. Keep the kernel minimal.

