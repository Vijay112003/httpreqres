function getData() {
  fetch('http://localhost:5000/your_api')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      displayResponse(data);
    })
    .catch(error => {
      displayResponse(`GET Error: ${error.message}`);
    });
}
function displayResponse(data) {
  const output = document.getElementById('responseOutput');
  output.textContent = JSON.stringify(data, null, 2);
}
document.getElementById('getBtn').addEventListener('click', getData);