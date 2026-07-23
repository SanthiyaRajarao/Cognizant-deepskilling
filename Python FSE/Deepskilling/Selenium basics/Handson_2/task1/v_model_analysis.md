# Task 1: V-Model Mapping

## Step : V-Model

```text
Requirements            ↔ Acceptance Testing
System Design           ↔ System Testing
Architecture Design     ↔ Integration Testing
Module Design           ↔ Unit Testing
          \            /
            Coding
```

---

## Step : SDLC ↔ TDLC Mapping

| SDLC Phase | TDLC Phase | Test Artifact |
|------------|------------|---------------|
| Requirements | Acceptance Testing | Acceptance Test Plan |
| System Design | System Testing | System Test Cases |
| Architecture Design | Integration Testing | Integration Test Cases |
| Module Design | Unit Testing | Unit Test Cases |

---

## Step : Entry & Exit Criteria

| Testing Phase | Entry Criteria | Exit Criteria |
|---------------|---------------|---------------|
| Unit Testing | Code completed | All unit tests pass |
| Integration Testing | Modules integrated | Integration tests pass |
| System Testing | Complete system ready | System tests pass |
| Acceptance Testing | System tested | Customer approves the system |

---

## Step : QA Engagement Points

1. **Requirements Phase**
   - QA reviews requirements and identifies ambiguities.

2. **Design Phase**
   - QA reviews system design and prepares test cases early.

---

## Summary

- V-Model links every SDLC phase with a corresponding testing phase.
- QA participates from the **Requirements** and **Design** phases.
- Entry criteria define when testing starts.
- Exit criteria define when testing is complete.
