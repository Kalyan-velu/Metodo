"use strict";
import appendNavbar from "./src/scripts/Navbar.js";
import { create, home, profile } from "./src/scripts/Routes.js";

// create the navbar
appendNavbar();

//get current window path
const currentPath = window.location.pathname;

// Routes
const createButton = document.getElementById("create-todo");
document.getElementById("create").addEventListener("click", create);

if (createButton !== null) {
  createButton.addEventListener("click", create);
}

document.getElementById("logo").addEventListener("click", home);
document.getElementById("profile").addEventListener("click", profile);

if (currentPath === "/src/create") {
  document.getElementById("create").style.color = "red";
}
if (currentPath === "/src/past") {
  document.getElementById("past").style.color = "red";
}

if (currentPath === "/src/profile") {
  document.getElementById("profile").style.color = "red";
}