# Page Object Model (POM)

## Objective
Implement Selenium tests using the Page Object Model (POM) design pattern.

## Benefits of POM
- Reusable code
- Easy maintenance
- Better readability
- Reduced code duplication

## Maintainability
Without POM, locator changes require updates in every test.
With POM, update the locator only once in the Page Object class.

## Run Tests
```bash
pytest test_pom.py -v
```

## Generate HTML Report
```bash
pytest test_pom.py --html=report.html --self-contained-html
```
