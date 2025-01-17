# ExpensesTracker-ReactNative

This is a React Native application for tracking expenses. The app allows users to add, edit, delete, and view their expenses. It uses Firebase as the backend for storing expense data.

## Features

- Add new expenses
- Edit existing expenses
- Delete expenses
- View recent expenses (last 7 days)
- View all expenses

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yasser942/ExpensesTracker-ReactNative.git
   cd ExpensesTracker-ReactNative
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the application:
   ```sh
   npm start
   ```

## Project Structure

- `App.js`: Main entry point of the application.
- `screens/`: Contains the different screens of the app.
  - `RecentExpenses.js`: Screen to display recent expenses.
  - `AllExpenses.js`: Screen to display all expenses.
  - `ManageExpense.js`: Screen to add or edit an expense.
- `components/`: Contains reusable components.
  - `ExpensesOutput/`: Components related to displaying expenses.
  - `ManageExpense/`: Components related to managing expenses.
  - `UI/`: UI components like buttons and overlays.
- `store/`: Contains the context and reducer for managing expenses state.
- `util/`: Utility functions for date formatting and HTTP requests.
- `constants/`: Contains global styles.

## Dependencies

- React: 18.2.0
- React Native: 0.74.2
- Expo: ~51.0.14
- Axios: ^1.7.2
- @react-navigation/native: ^6.1.17
- @react-navigation/bottom-tabs: ^6.5.20
- @react-navigation/native-stack: ^6.9.26

## Context and Reducer

The app uses the Context API to manage the state of expenses. The context is defined in `store/expenses-context.js` and provides methods to add, set, delete, and update expenses.

## HTTP Requests

The app uses Axios to make HTTP requests to a Firebase backend. The HTTP utility functions are defined in `util/http.js`.

## Screens

### RecentExpenses

This screen fetches and displays expenses from the last 7 days.

### AllExpenses

This screen displays all expenses.

### ManageExpense

This screen allows users to add a new expense or edit an existing one.

## Components

### ExpensesOutput

This component is used to display a list of expenses.

### UI Components

Reusable UI components like buttons and overlays.

## Screenshots

Here are some screenshots of the app in action:

### <img src="screenshots/1.jpg" alt="Screenshot 1" width="300"/>

### <img src="screenshots/2.jpg" alt="Screenshot 2" width="300"/>

### <img src="screenshots/3.jpg" alt="Screenshot 3" width="300"/>

### <img src="screenshots/4.jpg" alt="Screenshot 4" width="300"/>

### <img src="screenshots/5.jpg" alt="Screenshot 5" width="300"/>

### <img src="screenshots/6.jpg" alt="Screenshot 6" width="300"/>
