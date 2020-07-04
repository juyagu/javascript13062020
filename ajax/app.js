/*
XMLHttpRequest
if(window.XMLHttpRequest){

}else if(window.ActiveXObject){
    xhr = new ActiveXObject(Microsoft.XMLHTTP)
}

*/

let email =document.querySelector("#email");
let boton = document.querySelector("#btn_enviar");
let loading = document.querySelector(".spinner-border");
let alerta = document.querySelector(".alert");


boton.addEventListener('click',function(){
    loading.classList.remove('hide')
    alerta.classList.add('hide');
    setTimeout(function(){
        validarEmail();
    },2000)
    
})

var objAjax;

function validarEmail(){
    if(window.XMLHttpRequest){
        objAjax = new XMLHttpRequest();
    }else{
        alert("Bajate un navegador como la gente")
        return false;
    }

    objAjax.onreadystatechange = callback;
    let valorEmail = email.value;
    objAjax.open('get',`http://127.0.0.1:3000?email=${valorEmail}`)
    objAjax.send(null)

}

function callback(){
    if(objAjax.readyState === 4 && objAjax.status === 200){
        loading.classList.add('hide')
        if(objAjax.responseText === 'existe'){
            alerta.classList.remove('hide')
        }else{
            alerta.classList.add('hide')   
        }
    }
}



//readystatechange => onreadystatechange
// click => onclick
//boton.onclick = 

email.onblur = saludar;

function saludar(){console.log("Hola!!")}

