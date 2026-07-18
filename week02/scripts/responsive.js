const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamButton.classList.toggle("open");
});

// What does 'toggle' mean? Instead of separate
// 'add' and 'remove' statements, 'toggle' means
// 'add the class if it does not currently exist' or
// 'remove the named class if it does exist'.

// The CSS class rules will handle the different
// views, layouts and displays. Javascript only
// applies the class value or not.