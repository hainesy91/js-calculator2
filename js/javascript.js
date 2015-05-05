

var number = document.getElementsByClassName('number');
for (var i=0; i<number.length; i++){
  number[i].addEventListener('click', function(e) {
    console.log(this.value)
  });
}


//lickButton.addEventListener('click', function(){
  //alert('This button has been clicked')
  //console.log()
//});