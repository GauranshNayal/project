//storing values in variables
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateButton = document.getElementById('calculate-bmi-btn');
const resultDiv = document.getElementById('result');

//calculation
function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; 

  //condition checker 
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultDiv.textContent = 'Please enter valid weight and height.';
    resultDiv.classList.remove('underweight', 'normal', 'overweight', 'obese');
    return;
  }

  const bmi = weight / (height * height);
  let bmiCategory = '';

  //bmi result
  if (bmi < 18.5) {
    bmiCategory = 'underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'normal';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'overweight';
  } else {
    bmiCategory = 'obese';
  }

  //display
  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory}).`;
  resultDiv.classList.remove('underweight', 'normal', 'overweight', 'obese');
  resultDiv.classList.add(bmiCategory);

  //scroll to section according to bmi
  const targetSection = document.getElementById(bmiCategory);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}
calculateButton.addEventListener('click', calculateBMI);
