// Javascript goes here

document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});


// document.getElementById("lastModified").innerHTML = document.lastModified;

// Function to update the last modified date
function displayLastModified() {
    // 1. Get the lastModified date of the document
    const modDate = new Date(document.lastModified);
    
    // 2. Format the date (e.g., MM/DD/YYYY)
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = modDate.toLocaleDateString('en-US', options);
    
    // 3. Insert the date into the HTML paragraph
    const dateElement = document.getElementById('last-modified-date');
    if (dateElement) {
        dateElement.innerHTML = formattedDate;
    }
}

// Run the function when the page loads
window.onload = displayLastModified;