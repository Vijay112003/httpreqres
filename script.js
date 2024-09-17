function getData() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
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
function postData() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    })
  })
    .then(response => response.json())
    .then(data => {
      displayResponse(data);
    })
    .catch(error => {
      displayResponse(`POST Error: ${error.message}`);
    });
}
function displayResponse(data) {
  const output = document.getElementById('responseOutput');
  output.textContent = JSON.stringify(data, null, 2);
}
document.getElementById('getBtn').addEventListener('click', getData);
document.getElementById('postBtn').addEventListener('click', postData);