# React Native Movie App

A mobile application for browsing movies, built with React Native.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)

## Prerequisites

Before you begin, ensure you have your machine set up for React Native development.

You can follow the official guide here: [React Native Environment Setup](https://reactnative.dev/docs/environment-setup).

Make sure you have the following installed:
- Node.js (v18 or newer)
- Yarn or npm
- Watchman (for macOS)
- A code editor like VS Code
- Xcode (for iOS development)
- Android Studio (for Android development)

## Installation

Follow these steps to get the project up and running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd react-native-movie
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using Yarn:
    ```bash
    yarn install
    ```

## Running the App

Once the dependencies are installed, you can run the app on a simulator/emulator or a physical device.

### For iOS

```bash
npm run ios
# or
yarn ios
```

### For Android

```bash
npm run android
# or
yarn android
```

If the Metro bundler does not start automatically, you can start it manually in a separate terminal window:
```bash
npm start
# or
yarn start
```

## Project Structure

Here is an overview of the project's directory structure:

```
/
├── android/          # Android native project files
├── ios/              # iOS native project files
├── src/              # Main source code for the React Native application
│   ├── assets/       # Images, fonts, and other static assets
│   ├── components/   # Reusable UI components
│   ├── navigation/   # Navigation logic (React Navigation)
│   ├── screens/      # Application screens
│   └── services/     # API calls, utilities, etc.
├── .env.example      # Example environment variables file
├── .gitignore        # Files and folders to be ignored by Git
├── App.tsx           # Main entry point of the application
└── package.json      # Project metadata and dependencies
```