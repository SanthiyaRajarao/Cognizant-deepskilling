# Task 2: Defect Lifecycle & Severity Classification

## Step 5: Defect Lifecycle

```
New → Assigned → Open → Fixed → Retest → Verified → Closed            
```

- **New:** Bug reported.
- **Assigned:** Assigned to developer.
- **Open:** Developer starts fixing.
- **Fixed:** Bug is fixed.
- **Retest:** QA tests the fix.
- **Verified:** QA confirms the fix.
- **Closed:** Bug is closed.
- **Rejected:** Bug is invalid or not reproducible.
- **Deferred:** Fix postponed to a future release.

---

## Step 6: Severity & Priority

| Bug | Severity | Priority | Justification |
|------|----------|----------|---------------|
| a) POST `/api/courses/` returns **500 Internal Server Error** | Critical | P1 | Core feature is completely broken. |
| b) Course names longer than 150 characters are truncated | Medium | P3 | Feature works but data is incorrect. |
| c) Typo in Swagger `/docs` page | Low | P4 | Cosmetic issue, no impact on functionality. |
| d) Login occasionally returns **401** with correct credentials | High | P1 | Users cannot log in consistently. |

---

## Step 7: Defect Report

| Field | Details |
|--------|---------|
| Defect ID | BUG-001 |
| Title | POST `/api/courses/` returns 500 Error |
| Environment | QA Server |
| Build Version | v1.0 |
| Severity | Critical |
| Priority | P1 |
| Steps | Send POST request to `/api/courses/` with valid data |
| Expected Result | Course created successfully (201 Created) |
| Actual Result | 500 Internal Server Error |
| Attachment | Screenshot of 500 Error |

---

## Step 8: Severity vs Priority

- **Severity:** Impact of the bug on the system.
- **Priority:** Urgency to fix the bug.

**Example:**
A spelling mistake on the CEO's dashboard has **Low Severity** but **High Priority** because it is highly visible.
