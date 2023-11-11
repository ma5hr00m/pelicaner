fetch('http://localhost:3000/api/v1/websites')
  .then(response => response.json())
  .then(data => {
    console.log(data.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
