var display = document.getElementById("display");
var after = document.getElementById("result");
var getIdTag = document.getElementById("equal");
var insertTag = '<i class="fa-solid fa-equals fa-2xs"></i>';
var addDisplayValue = "";

function getValue(value){

  var result = display.value.slice(display.value.length - 1);
  var operators = ["+", "-", "/", "*", "%"];
  var checKDot = display.value.slice(display.value.length -1);
  var dot = ["."];

  if(operators.indexOf(result) !== -1 && operators.indexOf(value) !== -1) {  // <===== it check the last value of the display if the last value of the display is any operator it change with new input operator from the user
    
    if(display.value.slice(0, 1) === "-" && display.value.slice(1,2) === ""){
      display.value = display.value.slice(0, 1);z
    }else{
      display.value = display.value.slice(0, -1) + value;
    }

  }
  else if(dot.indexOf(checKDot) !== -1 && dot.indexOf(value) !== -1){
    display.value = display.value.slice(0, -1) + value;
  }
   else {                                                      // <====== if the last value id not any operator then Else is run
   
    var firstValueOperators = ["+", "/", "*", "%"];
    var ifFirstFound = false;
    addDisplayValue += value;
    var makeArray = addDisplayValue.split("");
    
    for (var i = 0; i < firstValueOperators.length; i++) {      // <====== it check the first operator if first operator is exist between (/, *, +, %) in the display then it delete the first index
      var firstOperatorsCheck = makeArray.slice(0, 1).includes(firstValueOperators[i]);
      if (firstOperatorsCheck) {
        ifFirstFound = firstOperatorsCheck;
      }
    }

    if (ifFirstFound) {    // <====== if the first index is operator in the index 0 is found so this condition delete the value
      makeArray.shift();
      var makeString = makeArray.join("");
      if (makeString) {
        display.value = makeString;
      }
    } else {               // <====== if the first index is not operator so then Else is run
      display.value += value;
    }

    addDisplayValue = display.value;

    for (var i = 0; i < operators.length; i++) {   // <====== it check if the any operator is exist between 2 operands then it print the result therwise not
      var check = display.value.includes(operators[i]);
      if (check) {

        var isFound = false;
        for(var i = 0; i < operators.length; i++){
        var checkOpt = display.value.slice(display.value.length - 1).includes(operators[i]);
        if(checkOpt){
          checkOpt = isFound
        }
        }

        if(isFound && after.value !== ""){
          display.value = display.value.slice(0, -1);
          getIdTag.innerHTML = insertTag;
          after.value = eval(display.value)
        }else{
          after.value = eval(display.value);
          getIdTag.innerHTML = insertTag;
        }

      }
    }
  }
}

function removeAll() {
  result.value = "";
  getIdTag.innerHTML = "";
  display.value = "";
  addDisplayValue = "";
}

function deleteLeft() {

  getIdTag.innerHTML = "";
  display.value = display.value.slice(0, -1);
  addDisplayValue = addDisplayValue.slice(0, -1);
  result.value = "";
  var operators = ["+", "-", "/", "*", "%"];

  for (var i = 0; i < operators.length; i++) {   // <====== it check if the any operator is exist between 2 operands then it print the result therwise not  
    var check = display.value.includes(operators[i]);

      if (check) {
        console.log(display.value)
        getIdTag.innerHTML = insertTag;
        var isFound = false;

        for(var i = 0; i < operators.length; i++){
        var checkOpt = display.value.slice(display.value.length - 1).includes(operators[i]);
        if(checkOpt){
          isFound = true;
          console.log(isFound)
        }
        }

        if(isFound){
          after.value = eval(display.value.slice(0, -1))
          console.log(display.value)
          if(display.value.slice(0, 1) === "-" && display.value.slice(1, 1) === "" && display.value.slice(1, 2) === "" ){
            after.value = "";
            getIdTag.innerHTML = "";
             console.log(display.value)
          }
        }
        else{
          after.value = eval(display.value)
          console.log(display.value)
        }

      }
    }
}

function calculation() {
  display.value = eval(display.value);
  after.value = ""
  getIdTag.innerHTML = "";
}