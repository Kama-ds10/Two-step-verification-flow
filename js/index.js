document.addEventListener('DOMContentLoaded', () => {
  
  // 1. FORM SUBMIT → go to step2.html
  const form = document.getElementById('verify-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nafdac = document.getElementById('nafdac').value.trim();
      const product = document.getElementById('product').value.trim() || 'Unknown Product';
      const name = document.getElementById('name').value.trim();
      const location = document.getElementById('location').value.trim();
      
      if (!nafdac || !name || !location) {
        alert('Please fill all required fields');
        return;
      }
      
      localStorage.setItem('nafdac', nafdac);
      localStorage.setItem('product', product);
      localStorage.setItem('name', name);
      localStorage.setItem('location', location);
      
      // Go to loader page
      window.location.href = 'step2.html';
    });
  }

  // 2. Detect location button
  const detectBtn = document.querySelector('.detect');
  const locationInput = document.getElementById('location');
  if (detectBtn && locationInput) {
    detectBtn.addEventListener('click', () => {
      if (navigator.geolocation) {
        detectBtn.textContent = '📍 Detecting...';
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            // For now just set a default. Later we can reverse geocode
            locationInput.value = 'Lagos State, Ikeja';
            detectBtn.innerHTML = '<img src="./assets/images/location.jpeg" alt="location icon"> Detect my location';
          },
          () => {
            locationInput.value = 'Lagos State, Ikeja';
            detectBtn.innerHTML = '<img src="./assets/images/location.jpeg" alt="location icon"> Detect my location';
          }
        );
      } else {
        locationInput.value = 'Lagos State, Ikeja';
      }
    });
  }

  // 3. Last Checks filter - All / Verified / Unverified
  const tabs = document.querySelectorAll('.checks-head .tab');
  const checks = document.querySelectorAll('.checks-card .check');

  if (tabs.length && checks.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Toggle active button
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const filter = tab.dataset.filter; // 'all', 'verified', 'unverified'
        
        // Show/hide checks
        checks.forEach(check => {
          const status = check.dataset.status; 
          if (filter === 'all' || status === filter) {
            check.classList.remove('hidden');
          } else {
            check.classList.add('hidden');
          }
        });
      });
    });
  }

});