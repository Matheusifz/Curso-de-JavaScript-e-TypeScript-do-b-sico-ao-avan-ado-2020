// Capturar o evento de Submit
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputWeight = e.target.querySelector("#weight");
  const inputHeight = e.target.querySelector("#height");

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (!weight) {
    setResult("Invalid Weight", false);
    return;
  }

  if (!height) {
    setResult("Invalid Height", false);
    return;
  }

  const bmi = getBmi(height, weight);
  const levelBmi = getLevelBmi(bmi);

  const msg = `Your bmi is ${bmi} (${levelBmi}).`;

  setResult(msg, true);
});

function getLevelBmi(bmi) {
  const level = [
    "Underweight",
    "Normal Weight",
    "Overweight",
    "Obesity I",
    "Obesity II",
    "Obesity III",
  ];

  if (bmi >= 39.9) return level[5];
  if (bmi >= 34.9) return level[4];
  if (bmi >= 29.9) return level[3];
  if (bmi >= 24.9) return level[2];
  if (bmi >= 18.9) return level[1];
  if (bmi < 18.9) return level[0];
}

function getBmi(height, weight) {
  const bmi = weight / height ** 2;
  return bmi.toFixed(2);
}

function createP() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result");

  result.innerHTML = "";

  const p = createP();

  if (isValid) {
    p.classList.add("paragraph-answer");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  result.appendChild(p);
}
