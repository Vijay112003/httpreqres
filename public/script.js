// Function to handle GET request from Node.js API
function getData() {
  fetch('http://localhost:5000/your_api')  // Fetching from your local Node.js API
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();  // Parse JSON response
    })
    .then(data => {
      displayResponse(data);  // Display the response in the page
    })
    .catch(error => {
      displayResponse(`GET Error: ${error.message}`);
    });
}

// Function to display the response on the page
function displayResponse(data) {
  const output = document.getElementById('responseOutput');
  output.textContent = JSON.stringify(data, null, 2); // Pretty print JSON
}

// Event listener for the GET button
document.getElementById('getBtn').addEventListener('click', getData);
