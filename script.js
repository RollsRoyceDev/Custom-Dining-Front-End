let currentStep = 0;

function nextStep() {
  const steps = document.getElementById('steps');
  const rightButton = document.querySelector('.fa-arrow-right');
  if (currentStep < 2) {
    currentStep++;
    steps.style.transform = `translateX(-${310 * currentStep}px)`;
    rightButton.style.color = 'black'
    document.querySelector('.fa-arrow-left').style.color = '#778089';
    
  }
}

function previousStep() {
  const steps = document.getElementById('steps');
  const leftButton = document.querySelector('.fa-arrow-left');

  if (currentStep > 0) {
    currentStep--;
    steps.style.transform = `translateX(-${310 * currentStep}px)`;
    // rightButton.style.color = '#778089'
    document.querySelector('.fa-arrow-right').style.color = '#778089';
    leftButton.style.color = 'black'
   

  }
}