var display = document.getElementById("display");
var after = document.getElementById("result");

function getValue(value){
  var result = display.value.slice(display.value.length - 1);
  var operators = ["+", "-", "/", "*", "%"];
  if (operators.indexOf(result) !== -1 && operators.indexOf(value) !== -1) {
    display.value = display.value.slice(0, -1) + value;
  } else { 
      display.value += value;
    if (display.value.length >= 2) {
      after.value = "";
      after.value += eval(display.value);
      getIdTag.innerHTML = insertTag;
    }
  }
}

var getIdTag = document.getElementById("equal");
var insertTag = '<i class="fa-solid fa-equals fa-2xs"></i>';

function removeAll() {
  if (display.value) {
    result.value = "";
  }
  getIdTag.innerHTML = "";
  display.value = "";
}

function deleteLeft() {
  getIdTag.innerHTML = "";
  display.value = display.value.slice(0, -1);
  result.value = "";
  if (display.value.length >= 2) {
    after.value = "";
    after.value += eval(display.value);
    getIdTag.innerHTML = insertTag;
  }
}

function calculation() {
  display.value = "";
  display.value += after.value;
  after.value = "";
  getIdTag.innerHTML = "";
}
