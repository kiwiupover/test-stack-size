# Test-stack-size

## Setup
This is a clean ember-cli ember application with 10 acceptance tests and 1 route unit test.

```sh
ember new test-stack-size
ember generate route the-test
ember generate acceptance-test the-test
```

Then I made 9 copies of the acceptance test.
The heap stack after from a test run.

![image](https://cloud.githubusercontent.com/assets/647691/19974448/d2f8105e-a1a5-11e6-8742-96255eb559f2.png)
