var number = document.getElementsByClassName('number');

var num1 = "";
var num2 = "";
var operator = document.getElementByClassName('operator');

for (var i=0; i<number.length; i++){
  number[i].addEventListener('click', function(e) {
    console.log(this.value);
    getnum1(this.value);
    getnum2(this.value);
  });
}

function getnum1(num1) {
  num1 = number
  console.log('this number is' + num1);

  if(num1 >0) {
    getnum2()
  }

  }

  function getnum2(num2){
    num2 = number
    console.log('this number is' + num2)
  }

for (var i=0; i<operator.length; i++){
  number[i].addEventListener('click', function(e) {
    console.log(this.value);
}


