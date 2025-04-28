// apply.js

document.getElementById('applicationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const hostel = document.getElementById('hostel').value.trim();
    const preference = document.getElementById('preference').value.trim();
  
    try {
      const response = await fetch('http://localhost:5000/api/application/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, hostel, preference })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Redirect to the Thank You page
        window.location.href = 'thankyou.html';
      } else {
        console.error(data.error);
        alert('Failed to submit application: ' + (data.error || 'Unknown error'));
      }
  
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to connect to the server.');
    }
  });
  