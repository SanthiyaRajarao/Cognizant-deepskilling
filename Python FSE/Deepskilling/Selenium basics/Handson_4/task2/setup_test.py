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
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import os
import time

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.maximize_window()

driver.get("https://www.lambdatest.com/selenium-playground")

driver.find_element("link text", "Simple Form Demo").click()

assert "simple-form-demo" in driver.current_url
print("URL Verified:", driver.current_url)

driver.back()

driver.execute_script("window.open('https://www.google.com');")

print("Window Handles:", driver.window_handles)

driver.switch_to.window(driver.window_handles[1])

print("Google Title:", driver.title)

driver.switch_to.window(driver.window_handles[0])

driver.save_screenshot("playground_screenshot.png")

if os.path.exists("playground_screenshot.png"):
    print("Screenshot saved successfully.")

print("Current Window Size:", driver.get_window_size())

driver.set_window_size(1280, 800)

print("Updated Window Size:", driver.get_window_size())

time.sleep(2)

driver.quit()
