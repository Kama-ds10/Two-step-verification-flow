document.addEventListener('DOMContentLoaded', () => {
  // Get data from localStorage
  const nafdac = localStorage.getItem('nafdac') || 'A1-1234';
  const product = localStorage.getItem('productName') || 'Emzor Paracetamol 500mg';
  const company = localStorage.getItem('companyName') || 'Emzor Pharmaceutical Ind. Ltd.';
  const expiry = localStorage.getItem('expiryDate') || 'March 2026';
  const category = localStorage.getItem('category') || 'Drug · Over the Counter';
  const regDate = localStorage.getItem('regDate') || '14 March 2019';
  const location = localStorage.getItem('companyLocation') || 'Plot 3, Abimbola way, Isolo, Lagos';
  const name = localStorage.getItem('name') || 'Justice Nweke';
  const userLocation = localStorage.getItem('location') || 'Port-Harcourt';
  
  // If no data, redirect back to step1
  if (!localStorage.getItem('nafdac')) {
    window.location.href = 'index.html';
    return;
  }
  
  // Fill all fields
  document.getElementById('nafdac-out').textContent = nafdac;
  document.getElementById('product-title').textContent = product;
  document.getElementById('product-out').textContent = product;
  document.getElementById('company-out').textContent = company;
  document.getElementById('expiry').textContent = `Valid Until ${expiry}`;
  document.getElementById('category-out').textContent = category;
  document.getElementById('reg-date').textContent = regDate;
  document.getElementById('company-location').textContent = location;
  document.getElementById('reported-by').textContent = `${name} · ${userLocation.split(',')[0]}`;
});