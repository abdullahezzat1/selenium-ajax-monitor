# selenium-ajax-monitor

This extension simply provides the count of active ajax requests of every tab separately.

So, in selenium, you can do the following (using python as an example):

```python
wait.until(lambda driver: driver.executeScript("return seleniumAjax.active === 0"))
```

This will force selenium to wait until all ajax requests are completed.
