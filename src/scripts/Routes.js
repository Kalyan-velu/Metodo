"use strict"
const currentUrl = new URL(window.location.href)

export function create(e) {
   var createUrl = new URL("/src/create", currentUrl);
   window.location.href = createUrl.href
};

export function home(e) {
   var createUrl = new URL("../../index.html", currentUrl);
   window.location.href = createUrl.href
}

export function profile(e) {
   var createUrl = new URL("/src/profile.html", currentUrl);
   window.location.href = createUrl.href
   document.getElementById('profile').removeEventListener('click')
}

