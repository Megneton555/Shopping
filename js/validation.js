const displayError=document.getElementById('error');
const displaySucess=document.getElementById('sucess');
const password1=document.getElementById('pass1')
const password2=document.getElementById('pass2')



password2.addEventListener('input', (e)=>{
    const pass1=password1.value;
    const pass2=password2.value;

 
    if(pass1 !== pass2){
      displayError.innerText="Password not matched!";
    } else{
        displaySucess.innerText="Password matched";
        displayError.style.display="none";
    }

    e.preventDefault();

  });
   





