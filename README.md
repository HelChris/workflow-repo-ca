# Workflow repo for the CA

## Goal

The objective of this assignment is to apply the skills and knowledge gained during the workflow course to enhance the quality of a website. You will do this by configuring tools and defining tests that improve the efficiency of the development process.

### Checklist

- Fork the workflow-repo-ca and create a branch named "workflow"
- Eslint is installed and configured to handle test globals
- Prettier is installed and configured
- Pre-commit hooks have been set up to handle linting and formatting
- Vitest has been installed and configured
- The relevant unit tests have been written and pass
- Playwright has been installed and configured
- The relevant e2e tests have been written and pass
- The README has been updated with the relevant scripts and environment variable examples
- .env is in .gitignore
- There is a .env.example file in the branch

## Set up Testing Tools:

### Install and configure Vitest for unit testing and test these cases:

#### isActivePath function:

- Returns true when current path matches href exactly
- Returns true for root path (“/”) when path is “/” or “/index.html”
- Returns true when current path includes the href
- Returns false when paths don’t match

#### getUserName function:

- Test that it returns the name from the user object in storage (first save a user object to storage)
- Test that it returns null when no user exists in storage

#### Install and configure Playwright for e2e testing and test these two cases:

##### login:

- User can successfully log in with valid credentials from environment variables. (If the login details from the lesson do not work, you can create a new user by running the project and using the register form)
- User sees an error message with invalid credentials
- Be sure to include .env in the gitignore and include an .env.example in the branch

##### navigation:

- Write a test that:

1. Navigates to the home page
2. Waits for the venue list to load
3. Clicks the first venue
4. Verifies that when the venue details page loads there are the words “Venue details” in the heading

## Features

- Feature 1
- Feature 2
- Feature 3

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
npm run dev
```

### Running tests

```bash
npm run test
```

## Environment Variables

Create a `.env` file in the root directory:

```bash
API_KEY=your-api-key-here
BASE_URL=https://example.com/api
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Technologies

- JavaScript
- HTML
- CSS
- ESLint
- Prettier

## Author

HelChris/Noroff
