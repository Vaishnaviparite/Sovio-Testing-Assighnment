# Sovio-Testing-Assighnment

## Project Overview
This project is created as part of the Sovio QA Testing Assignment.
It includes manual test cases and an initial Playwright automation setup
for core user authentication features.

## Features Covered
- User Registration
- User Sign In
- Passkey Registration
- Sign In using Passkey

## Manual Testing
Manual test cases are documented in the Excel file:

Sovio_Manual_Test_Cases.xlsx

### Manual Test Case Status
All manual test cases are currently marked as **Blocked** due to
client-side certificate authentication required by the application.

This security popup prevents further execution of:
- Registration
- Login
- Passkey setup
- Passkey authentication

This is an environment-level constraint, not a functional defect.

## Automation Testing
Automation is implemented using **Playwright with JavaScript**.

### Tools & Technologies
- Playwright
- JavaScript
- Node.js
- VS Code

### Automated Scenarios
- User Registration – Happy Path
- User Login – Happy Path

### Automation Status
Automation execution is blocked due to the same certificate
authentication popup which cannot be bypassed in automation.


## Project Structure
tests/

└── example.spec.js
playwright.config.js
README.md
Sovio_Manual_Test_Cases.xlsx

## Conclusion
This assignment demonstrates:
- Strong understanding of test case design
- Proper test execution reporting
- Awareness of environment and security limitations
- Basic automation framework setup using Playwright

