// Handle hostel selection
function selectHostel(hostelName) {
    const title = document.getElementById('hostelTitle');
    const desc = document.getElementById('hostelDesc');
    const image = document.getElementById('hostelImage');
  
    title.textContent = hostelName;
  
    switch (hostelName) {
      case 'Pent':
        desc.textContent = 'Pent is a popular hostel known for its vibrant community and spacious rooms.';
        image.src = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Pent_Hall_UG.jpg';
        break;
      case 'Elizabeth Sey':
        desc.textContent = 'Elizabeth Sey Hall is known for its modern design and peaceful atmosphere.';
        image.src = 'https://www.ug.edu.gh/sites/default/files/images/Elizabeth%20Sey%20Hall.jpg';
        break;
      case 'Mensah Sabah':
        desc.textContent = 'Mensah Sabah Hall is centrally located with easy access to lecture halls.';
        image.src = 'https://www.ug.edu.gh/sites/default/files/images/Mensah%20Sabah%20Hall.jpg';
        break;
    }
  
    image.style.display = 'block';
  }
  
  // Hourly changing hostel facts
  const hostelFacts = [
    "Pent has over 1,500 rooms and is one of the largest halls in West Africa.",
    "Elizabeth Sey was the first female student of the University of Ghana.",
    "Mensah Sabah Hall is named after Ghana's first Black African Vice-Chancellor.",
    "Pent Hall Week is one of the most anticipated events on campus!",
    "Elizabeth Sey Hall has a rooftop garden accessible to residents only.",
    "Mensah Sabah has a state-of-the-art digital study room."
  ];
  
  function updateHostelFact() {
    const factBox = document.getElementById('hostelFact');
    const randomIndex = Math.floor(Math.random() * hostelFacts.length);
    factBox.textContent = hostelFacts[randomIndex];
  }
  updateHostelFact();
  setInterval(updateHostelFact, 60 * 60 * 1000); // every hour
  
  // Countdown to deadline
  const deadlineDate = new Date("2025-06-15T23:59:59");
  function updateCountdown() {
    const now = new Date();
    const diff = deadlineDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    document.getElementById("deadlineTimer").textContent =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
  
  // Theme switching
  document.getElementById("themeSelector").addEventListener("change", function () {
    const theme = this.value;
    const body = document.body;
  
    switch (theme) {
      case "light":
        body.style.background = "#ffffff";
        break;
      case "blue":
        body.style.background = "#e8f1fc";
        break;
      case "dark":
        body.style.background = "#1e1e2f";
        break;
    }
  });
  // Existing selectHostel function remains unchanged...


  