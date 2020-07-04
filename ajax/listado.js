let grupo = document.querySelector("#grupo");
grupo.addEventListener('change',cargarSuperHeroes)

function cargarSuperHeroes(){
    id_grupo = grupo.value;
    let url  = 'http://127.0.0.1:3000'
    if(window.XMLHttpRequest){
        objAjax = new XMLHttpRequest();
    }else{
        alert("Bajate un navegador como la gente")
        return false;
    }

    objAjax.addEventListener('load',response);
    objAjax.addEventListener('error',errorAjax)

    objAjax.open('POST',url)
    objAjax.send(id_grupo)
}

function response(){
    if(objAjax.status !==  200){
        errorAjax();
    }
    document.querySelector("#listado").innerHTML = objAjax.responseText;
}

function errorAjax(){
    console.log("Che, me parece que esto no funca")
}