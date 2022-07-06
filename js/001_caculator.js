function caculation() {
  alert('메롱');
  var value1 = document.getElementById('value1').value;
  var value2 = document.getElementById('value2').value;
  var operator = document.getElementById('operator').value;
  var reuslt = document.getElementById('result');

  if (operator == '+') {
    reuslt.value = parseInt(value1 + value2);
  } else if (operator == '-') {
    reuslt.value = parseInt(value1 - value2);
  } else if (operator == '*') {
    reuslt.value = parseInt(value1 * value2);
  } else if (operator == '/') {
    reuslt.value = parseInt(value1 / value2);
  }
}

function reset() {
  // var value1 = document.getElementById('value1');
  // var value2 = document.getElementById('value2');
  // var operator = document.getElementById('operator');
  // var reuslt = document.getElementById('result');
  // value1.value = "";
  // value2.value = "";
  // operator.value = "";
  // reuslt.value = "";
  var inputs = document.querySelectorAll("input");
  for(let i=0; i<=inputs.length; i++){
    inputs[i].value = "";
  }
}