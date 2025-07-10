# Trader UI Web Application

A modern, responsive trading dashboard built with React, Ant Design, Tailwind CSS, and react-toastify. This application provides a rich user interface for managing trading accounts, viewing positions, and executing trades, with real-time updates via API and websockets.

---

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Running the App](#running-the-app)
- [Building for Production](#building-for-production)
- [Main Components](#main-components)
- [API & Data Flow](#api--data-flow)
- [Customization](#customization)

---

## Features
- Responsive layout for desktop and mobile
- Sidebar navigation and main content area
- Account management with URL-based account switching
- Real-time data sync via API and websockets
- Toast notifications for user feedback
- Modular component structure for easy extension
- Periodic background data synchronization

---

## Project Structure

```
trader-ui/
├── public/                  # Static assets
├── src/
│   ├── api/                 # API interaction logic
│   ├── components/          # UI components (Header, Sidebar, MainContent, etc.)
│   ├── store/               # State management (user, UI, etc.)
│   ├── utils/               # Utility functions (event bus, helpers)
│   ├── App.js               # Main app entry point
│   ├── index.js             # React DOM bootstrap
│   └── ...
├── package.json             # Project metadata and dependencies
├── tailwind.config.js       # Tailwind CSS configuration
└── ...
```

---

## Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd trader-ui
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Configure environment:**
   - Copy `.env.development` or `.env.production` as needed and set environment variables (API endpoints, keys, etc.).

---

## Running the App

Start the development server:
```bash
npm start
# or
yarn start
```
- The app will be available at `http://localhost:3000` by default.

---

## Building for Production

To create an optimized production build:
```bash
npm run build
# or
yarn build
```
- Output will be in the `build/` directory.

---

## Main Components

- **App.js**: Main entry point, sets up layout, routing, and global providers.
- **Header**: Top navigation bar with account info and actions.
- **Sidebar**: Navigation for different trading views (positions, orders, etc.).
- **MainContent**: Displays the main dashboard, trading data, and widgets.
- **MobileContent**: Optimized layout for mobile devices.
- **PopupComponent**: Handles modal dialogs and popups.
- **OrderStatusListWidget**: Shows real-time order status updates.
- **FloatingBottomLeftPanel**: Expandable panel for quick actions.

---

## API & Data Flow

- **API Calls**: Located in `src/api/`, e.g., `apis.js` for REST endpoints and `websocket.js` for real-time updates.
  - Example usage:
    ```js
    import { sync } from './api/apis';
    sync().then(data => { /* handle data */ });
    ```
- **State Management**: Located in `src/store/`, using custom stores for user and UI state.
  - Example usage:
    ```js
    import * as userStore from './store/userStore';
    userStore.setAccountId('new-account-id');
    ```
- **Event Bus**: `src/utils/eventBus.js` provides a pub/sub mechanism for cross-component communication.

- **Data Synchronization**: The app periodically calls the `sync` API and listens for websocket events to keep data up-to-date.

- **Account Switching**: The app reads the `accountId` from the URL and updates state accordingly. Changing accounts updates the URL and triggers a data refresh.

---

## Customization

- **Styling**: Uses Tailwind CSS and Ant Design. Customize `tailwind.config.js` and override Ant Design styles as needed.
- **Adding Features**: Add new components to `src/components/` and connect them via the main layout in `App.js`.
- **API Integration**: Add or update API calls in `src/api/` and update state via stores or event bus.

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.
