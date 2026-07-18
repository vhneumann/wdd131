// here goes the javascript code for the BOM page.

// Steps 1 to 4 involve creating and populating the
// 'styles'and 'scripts'folders for the çss' and 'javascript'
// files. Also, copyng the 'html' and çss'code from the
// following CodePen: https://codepen.io/BYU-Idaho/pen/QwwKMzL


//  5 - Declare 3 variables to hold references
//      to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//  6 - Create a li element that will hold each entry's
//      chapter title and an associated delete button.
// const li = document.createElement('li');

//  7 - Create a delete button
// const deleteButton = document.createElement('button');

//  8 - Populate the li element variable's textContent
//      or innerHTML with the input value.
//  li.textContent = input.value;

//  9 - Set the delete button's textContent to ❌
//  deleteButton.textContent = '<button type="submit" aria-label="Close" id="close-button">❌</button>';

//  10 - Append the delete button to the li element.
//  li.append(deleteButton);

//  11 - Append the li element variable to the
//       unordered list in your HTML.
//  list.append(li);




// Create a click event listener for the Add Chapter button
// with addEventListener.
//  button.addEventListener('click', function() {
//      Code to execute when the button is clicked
//  });

button.addEventListener('click', function () {
    // Code to execute when the button is clicked
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        li.appendChild(deleteButton);
        list.append(li);
        input.value = '';
        input.focus();
    }
});




