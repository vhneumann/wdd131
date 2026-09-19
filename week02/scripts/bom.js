// Here goes the javascript code for the BOM Top 10 page.
// First, declare constants
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Second, add event listener and wait for button clicks
button.addEventListener('click', function () {
    // check user input if different to null
    if (input.value.trim() !== '') {
        // Create list item with value of input
        const li = document.createElement('li');
        li.textContent = input.value;
        // Create delete button and add a click event listener
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '\u274C';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        // Add the button to the list item
        li.appendChild(deleteButton);
        // OUTPUT: display the completed list item
        // to the unordered list
        list.appendChild(li);
        // Clear the user input field
        input.value = '';
    }
    // Focus the user back to the input field
    input.focus();
});
















