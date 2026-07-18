// here goes the javascript code for the BOM page.

//  5 - Declare 3 variables to hold hold references
//      to the input, button, and list elements.
const input = document.queryselector('#favchap');
const button = document.queryselector('button');
const list = document.queryselector('list');

//  6 - Create a li element that will hold each entry's
//      chapter title and an associated delete button.
const li = document.queryselector('li');

//  7 - Create a delete button
const deleteButton = document.queryselector('button');

//  8 - Populate the li element variable's textContent
//      or innerHTML with the input value.
li.textContent = input.value;

//  9 - Set the delete button's textContent to ❌
deleteButton.textContent = '❌';

//  10 - Append the delete button to the li element.
li.append(deleteButton);

//  11 - Append the li element variable to the
//       unordered list in your HTML.
list.append(li);

/*
button.addEventListener('click', function() {

});

if (input.value.trim() !== '') {};

deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
});
*/
