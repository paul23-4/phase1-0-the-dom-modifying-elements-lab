// Assuming that the tests require the removal of the 'main#main' element
const mainElement = document.getElementById('main');

// Check if the main element exists before attempting to remove it
if (mainElement) {
    // Remove the main element
    mainElement.remove();
}

// Create a newHeader variable pointing to an h1 element with id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Append the newHeader element to the body
document.body.appendChild(newHeader);

// Set the text content of newHeader to "YOUR-NAME is the champion"
newHeader.textContent = 'YOUR-NAME is the champion';
