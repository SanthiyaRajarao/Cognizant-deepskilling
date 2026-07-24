from selenium.webdriver.common.by import By
from pages.base_page import BasePage


class CheckboxPage(BasePage):

    FIRST_CHECKBOX = (By.CSS_SELECTOR, "input[type='checkbox']")

    def check_option(self):
        self.wait_for_element(self.FIRST_CHECKBOX).click()

    def uncheck_option(self):
        self.wait_for_element(self.FIRST_CHECKBOX).click()

    def is_option_checked(self):
        return self.wait_for_element(self.FIRST_CHECKBOX).is_selected()