// here goes the code for the BOM page.
const input = document.queryselector('#favchap');
const button = document.queryselector('button');
const list = document.queryselector('list');
const li = document.queryselector('li');
const deleteButton = document.queryselector('button');
li.textContent = input.value;
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);
button.addEventListener('click', function() {

});

if (input.value.trim() !== '') {};

deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
});
