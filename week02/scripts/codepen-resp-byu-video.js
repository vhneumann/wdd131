// Store the selected elements that we are going to use.
const mainNav = document.querySelector(".navigation");
const hamButton = document.querySelector("#menu");

// Add a click event listener to the hamburger button and use a
// callback function that toggles the list element's list of classes.
hamButton.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    hamButton.classList.toggle("show");
});

// What does 'toggle' mean? Instead of separate
// 'add' and 'remove' statements, 'toggle' means
// 'add the class if it does not currently exist' or
// 'remove the named class if it does exist'.

// The CSS class rules will handle the different
// views, layouts and displays. Javascript only
// applies the class value or not.