# selenium-ajax-monitor

This extension simply provides the count of active ajax requests of every tab separately.

So, in selenium, you can do the following (using python as an example):

```python
wait.until(lambda driver: driver.execute_script("return seleniumAjax.active < 1"))
```

This will force selenium to wait until all ajax requests are completed.
