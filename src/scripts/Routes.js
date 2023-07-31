"use strict";

// Get the current URL using the browser's window.location.href
const currentUrl = new URL(window.location.href);

// Function to navigate to the "Create" page
export function create() {
   // Create a new URL object based on the current URL and append the path for the "Create" page
   var createUrl = new URL("/src/create.html", currentUrl);

   // Navigate to the "Create" page by setting the window.location.href to the new URL
   window.location.href = createUrl.href;
};

// Function to navigate to the "Home" page (index.html)
export function home() {
   var homeUrl = new URL("../../index.html", currentUrl);
   window.location.href = homeUrl.href;
}

export function previous() {
   let previousTodos = new URL("../../src/previous.html", currentUrl);
   window.location.href = previousTodos.href;

}

export const about = () => {
   let aboutLink = new URL("../../src/about.html", currentUrl);
   window.location.href = aboutLink.href;
}
// Function to navigate to the "Profile" page
export function profile() {
   var profileUrl = new URL("../src/profile.html", currentUrl);

   window.location.href = profileUrl.href;
}
