// Simulates the loading sequence for Step 2
const steps = document.querySelectorAll('.step-item');
const loaderCircle = document.querySelector('.loader-progress');
const circumference = 2 * Math.PI * 34; // 2πr where r=34

let currentStep = 0;
const totalSteps = steps.length;

// Set initial dasharray
loaderCircle.style.strokeDasharray = circumference;
loaderCircle.style.strokeDashoffset = circumference;

function activateStep(stepIndex) {
  // Mark previous steps as completed
  for (let i = 0; i < stepIndex; i++) {
    steps[i].classList.remove('active');
    steps[i].classList.add('completed');
  }

  // Mark current step as active
  steps[stepIndex].classList.add('active');

  // Update circular progress
  const progress = ((stepIndex + 1) / totalSteps) * circumference;
  const offset = circumference - progress;
  loaderCircle.style.strokeDashoffset = offset;
}

function startLoader() {
  activateStep(0);

  const interval = setInterval(() => {
    currentStep++;

    if (currentStep < totalSteps) {
      activateStep(currentStep);
    } else {
      clearInterval(interval);
      // All steps done - redirect to step 3 after 1s
      setTimeout(() => {
        // window.location.href = 'step3.html';
        console.log('Loading complete - redirect to results page');
      }, 1000);
    }
  }, 2000); // 2 seconds per step
}

// Start when page loads
document.addEventListener('DOMContentLoaded', startLoader);