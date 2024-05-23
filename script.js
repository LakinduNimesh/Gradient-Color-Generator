let colorOne = document.getElementById("color-one");
let colorTwo = document.getElementById("color-two");
let currentDirection = 'to bottom';
let outputCode = document.getElementById("color-code");

function setDirection(value, _this) {
  let direcrtions = document.querySelectorAll(".gradient-directions button");
  for (let i of direcrtions) {
    i.classList.remove("active");
  }
  _this.classList.add("active");
  currentDirection = value;
}

function generateCode() {
  outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
  document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

function copyText() {
  outputCode.select();
  document.execCommand('copy');
  alert("Gradient Copied!");
}


generateCode();