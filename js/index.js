document.getElementById('verify-form').addEventListener('submit', (e) => {
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
  
  // Go to step2.html
  window.location.href = 'step2.html';
});

// Detect location button
document.querySelector('.detect').addEventListener('click', () => {
  document.getElementById('location').value = 'Lagos State, Ikeja';
});

// Tab switching - visual only
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
  });
});