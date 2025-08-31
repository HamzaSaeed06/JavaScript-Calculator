var display = document.getElementById("display");
var after = document.getElementById("result");
var getIdTag = document.getElementById("equal");
var insertTag = '<i class="fa-solid fa-equals fa-2xs"></i>';
var z = "";

function getValue(value, b) {
  var result = display.value.slice(display.value.length - 1);
  var operators = ["+", "-", "/", "*", "%"];
  if (operators.indexOf(result) !== -1 && operators.indexOf(value) !== -1) {  // <===== it check the last value of the display if the last value of the display is any operator it change with new input operator from the user
    display.value = display.value.slice(0, -1) + value;
  } else {                                                      // <====== if the last value id not any operator then Else is run
    var firstValueOperators = ["+", "/", "*", "%"];
    var ifFirstFound = false;
    z += value;
    console.log(z);
    var a = z.split("");
    for (var i = 0; i < firstValueOperators.length; i++) {      // <====== it check the first operator if first operator is exist between (/, *, +, %) in the display then it delete the first index
      var firstOperatorsCheck = a.slice(0, 1).includes(firstValueOperators[i]);
      if (firstOperatorsCheck) {
        ifFirstFound = firstOperatorsCheck;
        console.log(ifFirstFound);
      }
    }

    if (ifFirstFound) {    // <====== if the first index is operator in the index 0 is found so this condition delete the value
      a.shift();
      console.log(a);
      var b = a.join("");
      if (b) {
        display.value = b;
        console.log(b);
        console.log(eval(b));
      }
    } else {               // <====== if the first index is not operator so then Else is run
      display.value += value;
    }
    z = display.value;

    for (var i = 0; i < operators.length; i++) {   // <====== it check if the any operator is exist between 2 operands then it print the result therwise not
      var check = display.value.includes(operators[i]);
      if (check) {
        after.value = "";
        after.value += eval(display.value);
        getIdTag.innerHTML = insertTag;
      }
    }
  }
}

function removeAll() {
  result.value = "";
  getIdTag.innerHTML = "";
  display.value = "";
  z = "";
}

function deleteLeft() {
  getIdTag.innerHTML = "";
  display.value = display.value.slice(0, -1);
  result.value = "";
  console.log(display.value);
  var operators = ["+", "-", "/", "*", "%"];
  for (var i = 0; i < operators.length; i++) {
    var check = display.value.includes(operators[i]);
    if (check) {
      after.value = "";
      after.value += eval(display.value);
      getIdTag.innerHTML = insertTag;
    }
  }
}

function calculation() {
  display.value = "";
  display.value += after.value;
  after.value = "";
  getIdTag.innerHTML = "";
}
