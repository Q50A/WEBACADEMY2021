/*creates a function holding variables to hold in the data like emails names or phone numbers*/
function submitForum() {
  let userName=document.userform.input_username.value;
  let userPhone=document.userform.input_phoneNum.value;
  let userEmail=document.userform.input_email.value;
  let userNameResult=document.getElementById("nameResult");
  let userPhoenResult=document.getElementById("PhoneNumResult");
  let userEmailResult=document.getElementById("emailResult");

  userNameResult.innerHTML=userName;
  phoneNumResult.innerHTML=userPhone;
  userEmailResult.innerHTML=userEmail;
  console.log(userEmail,userPhone,userName);
  //document.getElemntById("before").innerHTML=" ";
}


function submitForum() {
  var x = document.getElementById("before");
  var y = document.getElementById("after");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.opacity ="1";
    y.style.display= "none";
    y.opacity.display ="0";
  } else {
    x.style.display = "none";
    y.style.display = "block";
    y.style.opcaity="0;"
  }
}

