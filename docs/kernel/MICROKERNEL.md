# CommonOS MicroKernel

Version: 0.1

Status: Draft

---

## Mission

The MicroKernel is the immutable core of CommonOS.

Its responsibility is NOT to implement business logic.

Its responsibility is to coordinate modules.

---

## Responsibilities

- Plugin lifecycle
- Event bus
- Permissions
- Configuration
- Logging
- Dependency injection
- Service registry

---

## Non Responsibilities

The kernel MUST NOT implement:

- Voting
- Economy
- Identity
- Marketplace
- Treasury

These belong to plugins.

---

## Design Principles

Small.

Stable.

Auditable.

Replaceable.

Independent.

---

## Module Communication

Modules communicate only through public interfaces.

Direct dependencies between plugins are forbidden.

Communication occurs through:

- Events

or

- Registered Services

---

## Future

Everything in CommonOS depends on the MicroKernel.

The MicroKernel depends on nothing.

