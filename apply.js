const form = document.getElementById('applyForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    hostel: document.getElementById('hostel').value,
    preference: document.getElementById('preference').value
  };

  try {
    const response = await fetch('http://localhost:5000/api/application/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (response.ok) {
      alert('Application submitted successfully!');
      form.reset();
    } else {
      alert('Error: ' + result.error);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to connect to the server.');
  }
});
