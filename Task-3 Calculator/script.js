let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

document.querySelector("body").addEventListener("keypress", (e) => {
  let key = e.key;
  console.log(key);
  if (/[0-9\+\-\*\/\.]/.test(key)) {
    string += key;
    input.value = string;
  } else if (key === "Enter") {
    string = eval(string);
    input.value = string;
  }

  if (key.toLowerCase() === "c") {
    string = "";
    input.value = string;   
  }
  else if (key.toLowerCase() === "backspace") {
    string = "";
    input.value = string;   
  }
});
