# QA Concepts - Task 1

## Step 1: Testing Levels

### Unit Testing
- Tests a single function.
- **Example:** Validate course details.
- **Expected:** Function returns `True`.
- **Type:** Functional

### Integration Testing
- Tests API and Database together.
- **Example:** `POST /api/courses/`
- **Expected:** Course saved and `201 Created`.
- **Type:** Functional

### System Testing
- Tests the complete application.
- **Example:** Admin adds a new course.
- **Expected:** Course appears in the course list.
- **Type:** Functional

### User Acceptance Testing (UAT)
- Performed by the end user.
- **Example:** College admin creates a course.
- **Expected:** Course is created successfully.
- **Type:** Functional

---

## Step 2: Functional vs Non-Functional Testing

### Functional Testing
- Checks **what** the system does.
- **Example:** Verify course is added successfully.

### Non-Functional Testing
- Checks **how well** the system works.
- **Example:** 1000 users access the API; response time should be under 2 seconds.

---

## Step 3: Black-Box vs White-Box Testing

| Black-Box Testing | White-Box Testing |
|-------------------|-------------------|
| No code knowledge required | Code knowledge required |
| Tests inputs and outputs | Tests internal logic |
| Performed by QA Tester | Performed by Developer |

---

## Step 4: Test Cases for `POST /api/courses/`

| Test Case ID | Description | Expected Result |
|--------------|-------------|-----------------|
| TC001 | Add valid course | Course created successfully (`201 Created`) |
| TC002 | Leave course name blank | Validation error displayed |
| TC003 | Add duplicate course | Duplicate course error displayed |
