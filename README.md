# MRmealBD

## Project Description

MRmealBD is a mobile application built with React Native and Expo, designed to provide a seamless food ordering and delivery experience. It features user authentication, browsing of restaurants and food items, managing a basket, and handling orders. The application supports multiple languages, indicating a focus on a broad user base.

## Technologies Used

*   **React Native:** For building native mobile applications using JavaScript and React.
*   **Expo:** A framework and platform for universal React applications, enabling faster development and deployment.
*   **TypeScript:** For type safety and improved code quality.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly styling the application.
*   **Firebase:** Likely used for backend services such as authentication, database, or storage.
*   **React Navigation:** For handling navigation within the application.
*   **i18n-js:** For internationalization and localization.

## Features

*   User Authentication (Login, Registration, Password Reset)
*   Browse Restaurants and Food Categories
*   View Restaurant and Dish Details
*   Add Items to Basket
*   Manage Orders
*   Wishlist Functionality
*   User Account Management
*   Multi-language Support

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

*   Node.js (LTS version recommended)
*   npm or Yarn
*   Expo CLI (`npm install -g expo-cli`)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/MRmealBD.git
    cd MRmealBD
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1.  **Start the Expo development server:**

    ```bash
    expo start
    ```

2.  This will open a new tab in your browser with the Expo Dev Tools. You can then:
    *   Scan the QR code with the Expo Go app on your mobile device (iOS or Android).
    *   Run on an Android emulator (`a`) or iOS simulator (`i`).
    *   Run in a web browser (`w`).

## Project Structure

```
MRmealBD/
├── app/                  # Main application screens and navigation
│   ├── (public)/         # Publicly accessible screens (e.g., Auth)
│   └── (tabs)/           # Tab-based navigation screens
├── assets/               # Static assets like images, fonts, and data
├── components/           # Reusable UI components
├── constants/            # Application-wide constants (colors, styles)
├── context/              # React Context for global state management
├── Helper/               # Utility functions
├── hooks/                # Custom React hooks
├── locales/              # Localization files (e.g., en.json, bn.json)
├── store/                # Zustand or similar state management stores
├── firebaseConfig.jsx    # Firebase configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Project dependencies and scripts
└── ...                   # Other configuration files (babel, metro, next, tsconfig)
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details. (Note: A LICENSE file is not included in the provided structure. You may want to add one.)
