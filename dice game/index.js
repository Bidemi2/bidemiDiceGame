const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const result = document.getElementById("result");
const rollDice = document.getElementById("rollDice");
let dices = [
  "dices1.png",
  "dices2.png",
  "dices3.png",
  "dices4.png",
  "dices5.png",
  "dices6.png",
];
let num1 = 1;
let num2 = 1;

rollDice.addEventListener("click", function () {
  let d1 = Math.floor(Math.random() * 6 + 1);
  let d2 = Math.floor(Math.random() * 6 + 1);
  dice1.src = dices[d1 - 1];
  dice2.src = dices[d2 - 1];
  if (d1 > d2) {
    result.innerText = `Habeeb win ${num1++} times`;
    result.style.color = "blue";
    result.style.fontSize = "60px";
  } else if (d2 > d1) {
    result.innerText = `Sheriff win ${num2++} times`;
    result.style.color = "green";
    result.style.fontSize = "60px";
  } else {
    result.innerText = "IT'S A TIE";
    result.style.color = "white";
    result.style.fontSize = "60px";
  }
});
