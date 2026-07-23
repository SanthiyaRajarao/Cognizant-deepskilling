# Task 2: Compare Automation Framework Types

## Step 21: Automation Framework Types

| Framework | Description | Advantage | Disadvantage | Example |
|-----------|-------------|-----------|--------------|---------|
| **Linear** | Tests are written in a single sequence from start to finish. Best for small projects. | Simple to create | Difficult to maintain as the project grows | Automating a simple login test. |
| **Modular** | The application is divided into modules, and reusable scripts are created for each module. | Reusable and easy to maintain | Requires planning to create modules | Create separate modules for Login, Courses, and Logout. |
| **Data-Driven** | Test data is stored outside the code (Excel, CSV, JSON), allowing the same test to run with multiple inputs. | Saves time by testing many data sets | Managing test data can be complex | Test login with 50 different usernames and passwords. |
| **Keyword-Driven** | Test steps are defined using keywords like Login, Click, EnterText, making tests easy to understand. | Non-technical users can create tests | Initial setup takes more effort | QA team creates keyword-based login tests. |
| **Hybrid** | Combines Modular, Data-Driven, and Keyword-Driven approaches. It is the most commonly used framework in real projects. | Flexible, scalable, and reusable | More complex to build | Complete Course Management testing with reusable modules and multiple test data. |

---

## Step 22: Recommended Framework

**Recommendation:** **Hybrid Framework**

**Reason:**

- Supports **50 different login credentials** using Data-Driven testing.
- Reuses login functionality across multiple test cases using Modular design.
- Allows both technical and non-technical team members to write tests using Keyword-Driven concepts.
- Easy to maintain and suitable for large projects.

---

## Step 23: Hybrid Framework Folder Structure

```text
CourseManagementAutomation/
│
├── config/
│   └── config.properties
│
├── testdata/
│   ├── LoginData.xlsx
│   └── CourseData.xlsx
│
├── pages/
│   ├── LoginPage.py
│   ├── DashboardPage.py
│   └── CoursePage.py
│
├── tests/
│   ├── test_login.py
│   ├── test_courses.py
│   └── test_smoke.py
│
├── utilities/
│   ├── driver.py
│   ├── excel_reader.py
│   └── screenshots.py
│
├── reports/
│
└── README.md
```

### Folder Description

- **config/** → Stores configuration settings.
- **testdata/** → Stores Excel or CSV test data.
- **pages/** → Contains Page Object Model (POM) files.
- **tests/** → Contains Selenium test scripts.
- **utilities/** → Helper methods like WebDriver setup and Excel reader.
- **reports/** → Stores execution reports and screenshots.

---

## Summary

- **Linear:** Best for small projects.
- **Modular:** Reusable and maintainable.
- **Data-Driven:** Ideal for multiple test inputs.
- **Keyword-Driven:** Easy for non-technical users.
- **Hybrid:** Best choice for real-world Selenium automation projects.
