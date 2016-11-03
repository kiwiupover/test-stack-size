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

Versions: ember 2.10.0-beta.1, ember-data: ^2.10.0-beta.1, ember-cli: 2.10.0-beta.2
![image](https://cloud.githubusercontent.com/assets/647691/19974448/d2f8105e-a1a5-11e6-8742-96255eb559f2.png)


Versions: ember 2.4.6, ember-data: 2.9.0, ember-cli: 2.4.3
![image](https://cloud.githubusercontent.com/assets/647691/19977781/09574e7e-a1b2-11e6-83c7-9f9ebd80f8ff.png)
