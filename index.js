// Import necessary modules
import appendNavbar from "./src/scripts/Navbar.js";
import { create, home, previous, profile, about } from "./src/scripts/Routes.js";

// document.addEventListener("DOMContentLoaded", () => {
appendNavbar(); // Call appendNavbar once the DOM is fully loaded

// Get current window path
const currentPath = window.location.pathname;

// Setup event listeners for navigation links
const createButton = document.getElementById("create-todo-button");
const createLink = document.getElementById("create-link");
const logoLink = document.getElementById("logo-link");
const profileLink = document.getElementById("profile-link");
const previousTodosLink = document.getElementById("previous-todos-link");
const aboutLink = document.getElementById("about-link");

if (createLink !== null) {
  createLink.addEventListener("click", create);
}

if (createButton !== null) {
  createButton.addEventListener("click", create);
}

if (logoLink !== null) {
  logoLink.addEventListener("click", home);
}

if (profileLink !== null) {
  profileLink.addEventListener("click", profile);
}

if (previousTodosLink !== null) {
  previousTodosLink.addEventListener("click", previous);
}

if (aboutLink !== null) {
  aboutLink.addEventListener("click", about);
}

// Function to set the active link based on the provided link ID
function setActiveLink(link) {
  // Get all the link elements with the class "link"
  const links = document.querySelectorAll(".link");

  // Remove the "active" class from all links
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }

  // Add the "active" class to the specified link
  const linkElement = document.getElementById(link);
  if (linkElement !== null) {
    linkElement.classList.add("active");
  }
}

// Check if the currentPath matches certain paths and add the "active" class to the corresponding link.
if (currentPath === "/src/create") {
  setActiveLink("create-link"); // Set "Create" link as active
}

if (currentPath === "/src/previous") {
  setActiveLink("previous-todos-link"); // Set "Previous List" link as active
}

if (currentPath === "/src/profile") {
  setActiveLink("profile-link"); // Set "Profile" link as active
}

if (currentPath === "/src/about") {
  setActiveLink("about-link"); // Set "About" link as active
}
// });
