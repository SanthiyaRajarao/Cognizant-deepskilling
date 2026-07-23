"""
Selenium Components

1. WebDriver
   Controls the browser and performs user actions.

2. Selenium Grid
   Executes tests on multiple browsers and machines.

3. Selenium IDE
   Records and plays back test cases.
"""
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.maximize_window()
driver.implicitly_wait(10)

driver.get("https://www.lambdatest.com/selenium-playground/simple-form-demo")

# ID
driver.find_element(By.ID, "user-message")
print("ID - Passed")

# CLASS NAME
driver.find_element(By.CLASS_NAME, "form-control")
print("CLASS NAME - Passed")

# TAG NAME
driver.find_element(By.TAG_NAME, "input")
print("TAG NAME - Passed")

# Relative XPath
driver.find_element(By.XPATH, "//input[@id='user-message']")
print("Relative XPath - Passed")

# Absolute XPath (may fail if website structure changes)
try:
    driver.find_element(By.XPATH, "/html/body/div/section[2]/div/div/div[1]/div/input")
    print("Absolute XPath - Passed")
except:
    print("Absolute XPath - Skipped (Website structure changed)")

# CSS Selector 1
driver.find_element(By.CSS_SELECTOR, "#user-message")
print("CSS Selector 1 - Passed")

# CSS Selector 2
driver.find_element(By.CSS_SELECTOR, "input.form-control")
print("CSS Selector 2 - Passed")

# CSS Selector 3
driver.find_element(By.CSS_SELECTOR, "input[id='user-message']")
print("CSS Selector 3 - Passed")

driver.get("https://www.lambdatest.com/selenium-playground/checkbox-demo")

# XPath text()
label = driver.find_element(By.XPATH, "//label[text()='Option 1']")
print("Label Found:", label.text)

# XPath contains()
labels = driver.find_elements(By.XPATH, "//label[contains(text(),'Option')]")

print("\nCheckbox Labels:")
for i, label in enumerate(labels, start=1):
    print(f"{i}. {label.text}")

driver.quit()