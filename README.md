##### Workflow repo for the CA

##### Goal

The objective of this assignment is to apply the skills and knowledge gained during the workflow course to enhance the quality of a website. You will do this by configuring tools and defining tests that improve the efficiency of the development process.

# | Venues Web Application |

## Project Overview

This project is a web application for browsing and interacting with venue listings. It features user authentication, venue listings, and detailed venue information pages.

### Features

- User registration and authentication
- Browse venue listings
- View detailed venue information
- Responsive design using Tailwind CSS
- Form validation for user inputs

## Prerequisites

- Node.js (v20+)
- npm

## Getting Started

### Installation

```bash
npm install
```

### Running the project

```bash
# Start the development server with Tailwind CSS processing
npm run dev

# Start the application server on port 5500
npm run start
```

### Development Workflow

The project uses several tools to ensure code quality:

- ESLint: For JavaScript linting
- Prettier: For code formatting
- Husky: For pre-commit hooks that run linting and formatting

## Testing

This project includes both unit tests and end-to-end tests.

### Unit Tests (Vitest)

```bash
#Run all tests
npm test

# Run tests in watch mode
npm test -- --watch
```

Unit tests cover:

- Input validation functions
- User interface utilities
- Storage utilities

### End-to-End Tests (Playwright)

```bash
# Run all e2e tests
npx playwright test

# Run with UI
npx playwright test --ui
```

E2E tests cover:

- User authentication flows
- Navigation between pages
- Error handling

## Environment Variables

Create a .env file in the root directory with:

```bash
TEST_USER_EMAIL=your-test-email@stud.noroff.no
TEST_USER_PASSWORD=your-test-password
```

## Available Scripts

- npm run dev - Start Tailwind CSS processing in watch mode
- npm run start - Start the development server
- npm test - Run Vitest unit tests
- npm run prepare - Install Husky hooks

## Technologies

- JavaScript (ES6+)
- HTML5
- Tailwind CSS
- ESLint
- Prettier
- Husky (Git hooks)
- Vitest (Unit testing)
- Playwright (E2E testing)

## Author

This project was originally created by Noroff/cnnrbrn and forked by HelChris, who created a "workflow-branch" enhanced with additional workflow tools and testing.
