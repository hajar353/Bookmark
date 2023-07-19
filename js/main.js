var bookmarkName = document.getElementById('sn');
var websiteUrl = document.getElementById('su');

var outBut = [];
if(localStorage.getItem('outBut')!= null){
   outBut=JSON.parse(localStorage.getItem('outBut'));
   displayAll();
}


function added() {

if(validation()==true){

   var bookMrak = {
      firstInbut: bookmarkName.value,
      secoundInbut: websiteUrl.value

   }

   outBut.push(bookMrak);

localStorage.setItem("outBut",JSON.stringify(outBut));

   clearForm();

   displayAll();

}
else{
   window.alert("Site name must contain at least 3 characters \n \n Site URL must be a valid one")
}


}

function clearForm() {

   bookmarkName.value = '';
   websiteUrl.value = '';
}

function displayAll() {
   var cartona = '';
   for (i = 0; i < outBut.length; i++) {

      cartona += `<tr>
   <td>${i+1}</td>
<td>${outBut[i].firstInbut}</td>
<td><button type="button" class="btn btn-success mt-0"><a class="text-decoration-none text-white" target="_blank" href="${outBut[i].secoundInbut}"><i class="fa-regular fa-eye mx-1"></i><span>Visit</span></a> </button></td>
<td><button onclick="deleted(${i})"  type="button" class="btn btn-danger mt-0"><i class="fa-solid fa-trash-can mx-1"></i><span>Delete</span> </button></td>
</tr>`
   }
   document.getElementById('tbody').innerHTML = cartona;
}

function deleted(idx){
   outBut.splice(idx,1);
   localStorage.setItem("outBut",JSON.stringify(outBut));
   displayAll();
}

function validation(){
   var valdate= /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
var valdate2=/^([0-9]*[a-zA-Z]){3,}[0-9]*$/
   return valdate.test(websiteUrl.value),valdate2.test((bookmarkName.value));
  
}