# Task 2: Agile QA and Shift-Left Testing

## Step : Problems in Waterfall

1. Bugs are found late, making them expensive to fix.
2. Testing starts only after development is complete.
3. Delays in project delivery due to late defect detection.

---

## Step : QA Role in Agile

| Agile Ceremony | QA Responsibility |
|---------------|-------------------|
| Sprint Planning | Define acceptance criteria and estimate testing effort. |
| Daily Standup | Report testing progress and blockers. |
| Sprint Review | Validate completed features and provide feedback. |
| Retrospective | Suggest improvements to the testing process. |

---

## Step : Shift-Left Practices

| Practice | Application to Course Management API |
|----------|--------------------------------------|
| Review Requirements | Identify unclear requirements early. |
| Write Test Cases Early (TDD/BDD) | Prepare test cases before coding. |
| Static Code Analysis | Detect coding issues before testing. |
| API Contract Testing | Verify API requests/responses before integration. |

---

## Step : Acceptance Criteria (Given-When-Then)

### Scenario 1: Create Course Successfully

**Given** the admin is logged in  
**When** valid course details are submitted  
**Then** the course is created successfully.

### Scenario 2: Duplicate Course Code

**Given** a course code already exists  
**When** the admin submits the same course code  
**Then** an error message is displayed.

### Scenario 3: Missing Required Fields

**Given** required fields are empty  
**When** the admin submits the form  
**Then** validation errors are shown and the course is not created.
