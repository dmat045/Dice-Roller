const rollBtn = document.getElementById("roll-btn");
const resultDiv = document.getElementById("result");
const numberInput = document.getElementById("number-input");

rollBtn.addEventListener("click", function() {
  const sides = parseInt(numberInput.value);
  const roll = Math.ceil(Math.random() * sides);
  resultDiv.innerText = `You rolled a ${roll}!`;
});
