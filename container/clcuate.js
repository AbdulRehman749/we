const display = document.getElementById("display");

function inputData(inputValue) {
  display.value += inputValue;
}
function cleardata() {
  display.value = " ";
}
function clacuate() {
  display.value = eval(display.value);
}
