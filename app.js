const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const weight = document.querySelector("#weight");
  const height = document.querySelector("#height");

  e.preventDefault();
  let heightValue = parseInt(Math.pow(height.value, 2));
  let weightValue = parseInt(weight.value);
  bmiCalculation(heightValue, weightValue);
});

const bmiCalculation = (heightValue, weightValue) => {
  const result = document.querySelector(".result");

  if (heightValue === "" || heightValue < 0 || isNaN(heightValue)) {
    result.innerHTML = `please enter valid height number`;
  } else if (weightValue === "" || weightValue < 0 || isNaN(weightValue)) {
    result.innerHTML = `please enter valid weight number`;
  } else {
    const bmi = Math.floor((weightValue / heightValue) * 10000);
    result.innerHTML = `<span>your BMI is ${bmi}</span>`;
    suggestion(bmi);
  }
};

const suggestion = (bmi) => {
  const fullresult = document.querySelector(".fullresult");

  if (bmi < 16) {
    fullresult.innerHTML = `your are underweight.you need to gain some weight`;
  } else if (bmi > 18.5 && bmi < 24.9) {
    fullresult.innerHTML = `your body weight is normal`;
  } else if (bmi >= 25) {
    fullresult.innerHTML = `your are overweight.do exercise you lazy bum`;
  }
};
