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
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

options = Options()
options.add_argument("--headless=new")
options.add_argument("--disable-gpu")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--remote-allow-origins=*")

driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install()),
    options=options
)

driver.implicitly_wait(10)

driver.get("https://www.lambdatest.com/selenium-playground/")

print("Page Title:", driver.title)
print("Current URL:", driver.current_url)
