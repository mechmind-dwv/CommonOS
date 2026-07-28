# ADR-0001

# Adopt MicroKernel Architecture

Status

Accepted

---

## Context

CommonOS is expected to support multiple independent modules including identity, governance, economy, treasury, marketplace and future extensions.

A tightly coupled architecture would reduce maintainability.

---

## Decision

Adopt a MicroKernel architecture.

Business logic must exist only inside plugins.

The Kernel coordinates plugins but contains no business rules.

Plugins communicate through Events and Services.

---

## Consequences

Advantages

- Loose coupling
- Replaceable modules
- Better testing
- Long-term maintainability
- Community extensibility

Tradeoffs

- More interfaces
- More abstraction
- Higher initial complexity

