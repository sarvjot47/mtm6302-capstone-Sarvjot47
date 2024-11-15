# Capstone Project

**Name:** Sarvjot Singh
**Student Number:** 41122802 

# Astronomy Picture of the Day (APOD) Web Application

## Project Overview

The **Astronomy Picture of the Day (APOD)** web application allows users to interact with NASA's APOD API to view daily astronomy images based on a selected date. The application enables users to save their favorite images, view them later, and remove them from the favorites list. It is designed to provide an engaging and responsive user experience across devices.

---

## Features

- **Fetch Astronomy Images**: Users can select a date to retrieve the corresponding Astronomy Picture of the Day along with its title, description, and a high-definition viewing option.
- **Save Favorites**: Users can save images to a "Favorites" list by clicking on a heart icon.
- **Manage Favorites**: Favorites are stored in the browser's `localStorage` for persistence across sessions. Users can view and delete their favorite images.
- **Responsive Design**: The application is optimized for both desktop and mobile devices.

---

## Application Pages

1. **Index Page**:
   - A date picker allows users to fetch the APOD image for a specific date.
   - Displays the fetched image along with its details.
   - Includes a heart icon for saving images as favorites.

2. **Favorites Page**:
   - Displays all saved favorite images with their details.
   - Users can remove images from the favorites list by clicking the heart icon.

---

## Steps Taken to Create the Application

### 1. **Setup and Planning**
- Defined the core functionality: API integration, Favorites management, and responsive UI.
- Designed a two-page application structure: one for viewing APOD and another for managing favorites.
- Chose Bootstrap for quick and responsive layouts.

### 2. **API Integration**
- Registered for an API key from NASA's APOD API.
- Implemented asynchronous calls using the Fetch API to retrieve image data based on the user-selected date.
- Handled edge cases like non-image responses (e.g., videos) gracefully.

### 3. **Frontend Development**
- Created two main HTML files:
  - **index.html**: Displays the APOD image for a selected date.
  - **favourite.html**: Displays saved favorite images.
- Used Bootstrap for a responsive layout and styling.

### 4. **Styling**
- Customized the design using CSS to match the theme of an astronomy application.
- Created a visually appealing heart icon to toggle Favorites, with a `filled` state for selected items.

### 5. **Favorites Management**
- Used `localStorage` to persist favorite images across user sessions.
- Implemented JavaScript functions to dynamically add and remove items from the favorites list.


## Technologies Used

- **HTML5**: Markup structure for the application.
- **CSS3**: Custom styling and responsive design.
- **JavaScript (ES6)**: API integration, DOM manipulation, and localStorage management.
- **Bootstrap 4.5**: Responsive UI components and grid system.
- **NASA APOD API**: Source for Astronomy Pictures of the Day.

