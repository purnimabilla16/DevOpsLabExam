from selenium import webdriver
options = webdriver.ChromeOptions()
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--ignore-certificate-errors')
driver = webdriver.Remote(
command_executor='http://localhost:4444/wd/hub',
options=options
)
driver.gewww.browserstack.com/")
time.sleep(10)
#click on the Get started for free button

driver.find_element_by_link_text("Get started free").click()
time.sleep(10)
#close the browser
driver.close()
driver.quit()
print("Test Execution Successfully Completed!")