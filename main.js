//todo:  string together several operations

let digitsStore = [];
let temp = 0;
let temp2 = 0;

let operator;

const digits = document.querySelectorAll(".digits");
const display = document.querySelector(".display");

const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const timesBtn = document.querySelector(".times");
const divideBtn = document.querySelector(".divide");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");

const digitsSelect = digits.forEach(el => {
  el.addEventListener("click", e => {
    digitsStore.push(e.target.innerHTML);
    return (display.innerHTML = digitsStore.join(""));
  });
});

clearBtn.addEventListener("click", e => {
  display.innerHTML = "";
  digitsStore = [];
  temp2 = 0;
});

plusBtn.addEventListener("click", e => {
  if (digitsStore.length !== 0) {
    temp = display.innerHTML; // store first value
    console.log(temp);
    operator = "+";
    digitsStore = [];
  }
});

minusBtn.addEventListener("click", e => {
  if (digitsStore.length !== "") {
    temp = display.innerHTML;
    operator = "-";
    digitsStore = [];
  }
});

timesBtn.addEventListener("click", e => {
  if (digitsStore.length !== "") {
    temp = display.innerHTML;
    operator = "*";
    digitsStore = [];
  }
});

divideBtn.addEventListener("click", e => {
  if (digitsStore.length !== "") {
    temp = display.innerHTML;
    operator = "/";
    digitsStore = [];
  }
});

equalBtn.addEventListener("click", e => {
  temp2 = Number(digitsStore.join("")); // store second value
  // console.log(`array = ${digitsStore.join("")}`);

  display.innerHTML = operate(operator, temp, temp2);
});

const addFunc = (dig1, dig2) => {
  return dig1 + dig2;
};

const substractFunc = (dig1, dig2) => {
  return dig1 - dig2;
};

const divideFunc = (dig1, dig2) => {
  return dig1 / dig2;
};

const multiplyFunc = (dig1, dig2) => {
  return dig1 * dig2;
};

const operate = (operator, num1, num2) => {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  switch (operator) {
    case "+":
      return addFunc(num1, num2);
    case "-":
      return substractFunc(num1, num2);
    case "*":
      return multiplyFunc(num1, num2);
    case "/":
      return divideFunc(num1, num2);
  }
};
