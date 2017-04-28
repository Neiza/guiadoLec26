var inputNameLastName = document.getElementsByTagName("input")[0];
var inputDni          = document.getElementsByTagName("input")[1];
var inputDate         = document.getElementsByTagName("input")[2];
var inputCellphone    = document.getElementsByTagName("input")[3];
var inputPhone        = document.getElementsByTagName("input")[4];
var inputPassword     = document.getElementsByTagName("input")[5];
var post              = document.getElementsByTagName("textarea")[0];
var inputPassword2    = document.getElementsByTagName("input")[6];
var inputCheck        = document.getElementsByTagName("input")[7];
var button            = document.getElementsByTagName("input")[8];

var spanNameLastNAme = document.getElementsByTagName("span")[0];
var spanDni          = document.getElementsByTagName("span")[1];
var spanDate         = document.getElementsByTagName("span")[2];
var spanCellphone    = document.getElementsByTagName("span")[3];
var spanPhone        = document.getElementsByTagName("span")[4];
var spanPaassword    = document.getElementsByTagName("span")[5];
var spanPaassword2   = document.getElementsByTagName("span")[6];
var spanPost         = document.getElementsByTagName("span")[7];
var spanCheck        = document.getElementsByTagName("span")[8];


var OnlyLettersFirstCapital = /^([A-Z]{1}[a-z]+[\s]*)+$/;
var expressionDni           = /^([0-9]{8})+$/;
var expressionDate          = /(\d+)(-|\/)(\d+)(?:-|\/)(?:(\d+)\s+(\d+):(\d+)(?::(\d+))?(?:\.(\d+))?)?([0-9]{2})/;
//var expressionCellPhone     = /^([96]{1}([\d]{2}[-]*){3}[\d]{2}$/;
var espressionPhone         = /[^A-Za-z]/;
/*var espressionPassword      = //;
var expressionPost          = //;
var expressionPassword6Characters  =/^[A-Za-z0-9_]$/; */

function nameLastnameValidation(){
   if(!OnlyLettersFirstCapital.test(inputNameLastName.value)){
      spanNameLastNAme.style .display = "block";
   }
   else {
     spanNameLastNAme.style .display = "none";
   }
}

function dniValidation(){
  if(!expressionDni.test(inputDni.value)){
     spanDni.style .display = "block";
  }
  else{
    spanDni.style .display = "none";
  }
}

function dateValidation(){
   if(!expressionDate.test(inputDate.value)){
      spanDate.style .display = "block";
   }
   else{
     spanDate.style .display = "none";
   }
}

/*function cellPhoneValidation() {
  if (!expressionCellPhone.test(inputCellphone.value)) {
  alert("nocell")
}

}*/


 window.addEventListener("load", function(){
   button.addEventListener("click", function(event){
     event.preventDefault();
     nameLastnameValidation();
     dniValidation();
     dateValidation()
     //cellPhoneValidation()
   })
 });
