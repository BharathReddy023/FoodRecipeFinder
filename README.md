# FoodRecipeMobile and FoodRecipeWeb

Food Recipe Finder Mobile Application:

## Introduction

The Food Recipe Finder project aims to create a mobile application that allows users to search for recipes based on ingredients and view detailed information about each recipe. The project will be developed using React Native framework.

## Prerequisites

Before setting up the project, ensure you have the following prerequisites installed:

Node.js and npm: Install from Node.js official website.
Expo CLI: Install globally using npm with the command npm install -g expo-cli.
Android Studio (for Android development) or Xcode (for iOS development): Install the respective IDE based on your development platform.

## Project Setup


To clone the Repository:
git@github.com:BharathReddy023/FoodRecipeFinder.git

Create a New React Native Project:(for creating new project)

npx create-expo-app food_recipe_mobile

Navigate to Project Directory:
cd food_recipe_mobile
## Install Dependencies:
npm install axios @react-navigation/native @react-navigation/stack
These dependencies include Axios for making API requests and React Navigation for managing navigation within the app

## Start the Development Server:
npm start

## Testing:
npm test

## Features:
The key features of the Food Recipe Application include:

User Authentication: Allow users to register and log in to access the application.
Recipe Search: Enable users to search for recipes by ingredients, cuisine type, and dietary restrictions.
Recipe Details: Display comprehensive information about recipes, including ingredients, nutritional facts, and preparation steps.
Responsive Design: Ensure the application is fully responsive and functional on both web and mobile platforms.
User Dashboard: Provide users with a dashboard to view their search history and favorite recipes.
Data Refresh: Implement functionality to refresh recipe data periodically or on user request.

## Future Enhancements:
User Profiles: Implement user profiles where users can view and edit their personal information, such as name, email, and profile picture.

Social Sharing: Allow users to share their favorite recipes with friends and family via social media platforms or messaging apps.

Advanced Search Filters: Enhance the search functionality by adding advanced filters such as dietary restrictions (e.g., vegetarian, gluten-free), cuisine type, cooking time, and calorie count.

Offline Support: Implement offline support so that users can access previously viewed recipes and search history even without an internet connection.

Recipe Recommendations: Use machine learning algorithms to provide personalized recipe recommendations based on users' past search history, favorite recipes, and dietary preferences.

## Conclusion:
You have successfully set up the Food Recipe Finder project. You can now start developing the app, adding features, and testing it to ensure its functionality.

## Resources

https://reactnative.dev/
https://reactnavigation.org/
https://stackoverflow.com/questions/77959387/error-typeerror-rngesturehandlermodule-default-flushoperations-is-not-a-functi

# Food_Recipe_Web_application
## Introduction
The Food Recipe Application is a web  that allows users to search for a variety of food recipes based on ingredients, cuisine type, and dietary restrictions. The application integrates with the Edamam API to fetch recipe data and provides users with detailed information about recipes, including ingredients, nutritional facts, and cooking instructions.

## Objectives
The main objectives of the Food Recipe Application are as follows:

Provide users with a user-friendly platform to explore food recipes.
Integrate the Edamam API to fetch recipe data based on user queries.
Implement user authentication for secure access to the application.
Develop responsive web and mobile interfaces for seamless user experience across devices.
Offer features such as search history, favorite recipes, and periodic data refresh.

## Features
The key features of the Food Recipe Application include:

User Authentication: Allow users to register and log in to access the application.
Recipe Search: Enable users to search for recipes by ingredients, cuisine type, and dietary restrictions.
Recipe Details: Display comprehensive information about recipes, including ingredients, nutritional facts, and preparation steps.
Responsive Design: Ensure the application is fully responsive and functional on both web and mobile platforms.
User Dashboard: Provide users with a dashboard to view their search history and favorite recipes.
Data Refresh: Implement functionality to refresh recipe data periodically or on user request.
Refresh: to refresh the page based on user request
Logout: To logout from dashboard page and redirect to login page

## Technologies used:
The Food Recipe Application is built using the following technologies:

Frontend: React.js for web development and React Native for mobile development.
API Integration: Edamam API for fetching recipe data.
User Authentication: React Router for routing and user navigation.
Styling: CSS for styling components and ensuring a visually appealing interface.
Testing: Jest and React Testing Library for unit and integration testing.

## setup nand Installations:

To set up the Food Recipe Application locally, follow these steps:

Clone the project repository from GitHub.
git@github.com:BharathReddy023/FoodRecipeFinder.git

Navigate to the project directory in your terminal.
cd food_recipe_web
Install project dependencies using npm install.
Start the development server using npm start.
Access the application in your web browser at http://localhost:3000/

## Testing:
The application includes unit tests for individual components and integration tests to ensure proper functionality. To run the tests, use the command npm test.



## Future enhancements:
Potential future enhancements for the Food Recipe Application include:

Social sharing features to allow users to share recipes with friends.
Advanced search filters for refining recipe searches based on user preferences.
Personalized recommendations based on user activity and saved recipes.
Integration with additional APIs to expand recipe database and enhance functionality.

## Conclusion:
The Food Recipe Application aims to provide users with an intuitive platform to discover and explore food recipes. By leveraging technologies like React.js and React Native, along with API integration and user authentication, the application delivers a seamless experience for users across web and mobile platforms.

## References:

https://stackoverflow.com/
https://react.dev/learn
https://www.npmjs.com/package/react-router-dom
