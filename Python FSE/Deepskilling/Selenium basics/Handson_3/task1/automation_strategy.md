# HANDS-ON 3: Test Automation Process, Lifecycle & Framework Types

# Task 1: Automation Decision and Test Case Selection

## Step 17: Criteria for Automation

| Criteria | Explanation | Applied to `POST /api/courses/` |
|----------|-------------|----------------------------------|
| Repetitive | Frequently executed tests |  Automate |
| Regression | Run after every code change  Automate |
| Stable | Feature does not change often |  Automate |
| Data-Driven | Can test multiple inputs |  Automate |
| High-Risk | Core API functionality |  Automate |

---

## Step 18: Automate or Manual?

| Test Case | Decision | Reason |
|-----------|----------|--------|
| a) Regression test for CRUD APIs | **Automate** | Runs after every build |
| b) Exploratory testing | **Manual** | Requires human analysis |
| c) Performance test (100 users) | **Automate** | Repetitive load testing |
| d) Login UI test | **Automate** | Frequently executed |
| e) Verify Swagger documentation | **Manual** | Needs human review |
| f) Smoke test after deployment | **Automate** | Quick validation after deployment |

---

## Step 19: Test Automation ROI

**ROI (Return on Investment):** Measures when automation becomes more cost-effective than manual testing.

- Automation Time = **4 hours = 240 minutes**
- Manual Time = **30 minutes/run**

**Break-even Runs**

240 ÷ 30 = **8 runs**

After the **10th run**, add **20% maintenance** per run.

**Result:** Automation pays for itself after approximately **8 runs**.

---

## Step 20: Flaky Test

**Definition:**
A flaky test passes sometimes and fails sometimes without any code changes.

**Example:**
A Selenium login test fails because the page has not fully loaded.

### Prevention

1. Use **Explicit Waits** instead of `Thread.sleep()`.
2. Use stable and unique locators (ID, Name).
3. Keep test data and environment consistent.

---

# Summary

- 5 Automation Criteria 
- Automate vs Manual Decisions 
- ROI Calculation 
- Flaky Test Definition, Example & Prevention 
