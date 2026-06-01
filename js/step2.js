// Get NAFDAC from localStorage and format it
const nafdac = localStorage.getItem('nafdac') || 'A1-1234';
document.getElementById('nafdac-display').textContent = nafdac.replace('-', ' - ');

let currentStep = 0;
const totalSteps = 4;

function activateStep(step) {
  const el = document.getElementById(`check-${step + 1}`);
  if (!el) return;
  
  el.classList.add('active');
  
  // Mark as completed after 1.8 seconds
  setTimeout(() => {
    el.classList.remove('active');
    el.classList.add('completed');
  }, 1800);
}

function startCheck() {
  activateStep(0);
  
  const interval = setInterval(() => {
    currentStep++;
    
    if (currentStep < totalSteps) {
      activateStep(currentStep);
    } else {
      clearInterval(interval);
      
      // Save mock result data for step3
      localStorage.setItem('productName', 'Emzor Paracetamol 500mg');
      localStorage.setItem('companyName', 'Emzor Pharmaceutical Ind. Ltd.');
      localStorage.setItem('expiryDate', 'March 2026');
      localStorage.setItem('category', 'Drug · Over the Counter');
      localStorage.setItem('regDate', '14 March 2019');
      localStorage.setItem('companyLocation', 'Plot 3, Abimbola way, Isolo, Lagos');
      
      // Go to step3 after 1 second
      setTimeout(() => {
        window.location.href = 'step3.html';
      }, 1000);
    }
  }, 2000); // 2 seconds per step = 8 seconds total
}

startCheck();