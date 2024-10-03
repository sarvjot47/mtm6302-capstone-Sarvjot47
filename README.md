# Capstone Project

**Name:** Sarvjot Singh
**Student Number:** 41122802 
**Project:** When a user first visits the site, they are presented with a form asking for a non-future date. With provided date, the app will make a request to the APOD API to retrieve that day's Astronomy Picture of the Day. The Picture of the Day will then be displayed on the page along with the title, date, and explanation. Clicking on the image should open the high definition version of the image.
The user will able to save images as favourites. Favourites images should be stored in local storage and display on the page whenever the user visits the site. Favourite images can also be deleted

# Astronomy Picture of the Day - Favourites Prototype

## Project Overview

This project is a web application that allows users to view and favorite Astronomy Pictures of the Day (APOD). Users can explore recent images, view a specific day's APOD, and manage their favorite images in the "Favourites" section. The application is built using HTML, CSS, JavaScript, and Bootstrap for a responsive and clean UI.

## Features

- **Astronomy Picture of the Day (APOD):** Displays a featured image along with its title and description.
- **Favorite Images:** Allows users to mark images as favorites by toggling a heart icon.
- **Favourites Section:** Users can view and manage all their favorite APODs.
- **Responsive Design:** The layout adapts to various screen sizes, ensuring a smooth experience on mobile, tablet, and desktop devices.
  
## Technologies Used

- **HTML/CSS:** For the basic structure and styling of the web pages.
- **Bootstrap 4.5.2:** Used for responsive design and layout.
- **JavaScript:** For interactive elements like toggling the heart icon for favoriting images.
- **SVG Icons:** For the heart icon that visually indicates the favorite status of an image.
- **APOD API (NASA API):** Placeholder images are used in this prototype. In the future, real data from NASA’s Astronomy Picture of the Day API can be integrated.

### Toggling Favourites

- On both the homepage and the favourites page, users can click on the heart icon to mark an image as a favorite. The heart icon fills in red when the image is favorited.
- The `toggleFavorite()` function is used to switch between the filled and unfilled heart states, using JavaScript to dynamically apply CSS classes.

### Responsive Layout

- The application uses Bootstrap’s grid system for layout. Media queries ensure that content is displayed properly across various screen sizes.
- The heart icon is placed in an absolute position within each card and is responsive to different screen sizes, adjusting its position accordingly.

### Sample Data

- For demonstration purposes, placeholder images are used in the current version. The NASA APOD API can be integrated to fetch real images and data dynamically.

## Challenges Faced

1. **Responsive Design:**
   - Ensuring the layout remained user-friendly across different devices required several iterations. Bootstrap's grid system helped manage responsiveness, but fine-tuning the layout for small screens needed manual adjustments using media queries.


