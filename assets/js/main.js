var inputName = document.getElementsByTagName("input")[0];
var inputLastName = document.getElementsByTagName("input")[1];
var inputDni = document.getElementsByTagName("input")[2];
var inputDate = document.getElementsByTagName("input")[3];
var inputCellphone = document.getElementsByTagName("input")[4];
var inputphone = document.getElementsByTagName("input")[5];
var inputPassword = document.getElementsByTagName("input")[6];
var inputPassword2 = document.getElementsByTagName("input")[7];
var post = document.getElementsByTagName("textarea")[0];
var inputCheckbox = document.getElementsByTagName("input")[8];
var button = document.getElementsByTagName("input")[9];


var expressionOnlyLetters          = /[A-Z]+[A-Z]/;
var expressionOnlyLetters2      = /^[A-Za-z]+$/;

var expressionFirstLetterUppercase = /^[A-Z]/;
var expressionEmail                = /\w+@+\w+\.+[a-z]/;
var expressionPassword6Characters  =/^[A-Za-z0-9_]$/;

function nameLastnameValidation(){
 if  (!expressionOnlyLetters.test(inputName.value)){
    alert("no cumple");
  }
}

 window.addEventListener("load", function(){
   button.addEventListener("click", function(event){
     event.preventDefault();
nameLastnameValidation()

   })
 });
