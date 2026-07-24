import pytest
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC


@pytest.mark.parametrize("message", [
    "Hello",
    "Selenium Automation",
    "12345"
])
def test_simple_form_submission(driver, base_url, message):
    driver.get(base_url + "simple-form-demo")

    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "user-message"))
    )

    textbox = driver.find_element(By.ID, "user-message")
    textbox.clear()
    textbox.send_keys(message)

    driver.find_element(By.ID, "showInput").click()

    output = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "message"))
    )

    assert output.text == message

    time.sleep(2)

def test_checkbox_interaction(driver, base_url):
    driver.get(base_url + "checkbox-demo")

    print(driver.current_url)
    print(driver.title)

    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.TAG_NAME, "input"))
    )

    checkboxes = driver.find_elements(By.TAG_NAME, "input")

    print("Number of input elements:", len(checkboxes))

    for i, cb in enumerate(checkboxes):
        print(i, cb.get_attribute("type"), cb.get_attribute("id"))


def test_dropdown_selection(driver, base_url):
    driver.get(base_url + "select-dropdown-demo")

    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "select-demo"))
    )

    dropdown = Select(driver.find_element(By.ID, "select-demo"))
    dropdown.select_by_visible_text("Wednesday")

    selected = dropdown.first_selected_option.text

    assert selected == "Wednesday"

    time.sleep(5)