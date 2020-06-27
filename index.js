/*
p =><p>
.parrafo => <p class="parrafo">
#parrafo => <p id="parrafo">
*/


var btn = document.querySelector(".btn");

btn.onclick = saludar;

function saludar(){
    console.log('Hola!!')
}

var cmb_opciones = document.querySelector("#combo_loco");

cmb_opciones.addEventListener('change',function(event){
    console.log(event.target)
    //is-invalid
    event.target.classList.add('is-invalid')
    console.log(event.target.classList)
})

document.querySelector("#edad").addEventListener('keypress',event => {   
    var char = event.keycode || event.which || event.charCode;
    if(char < 48 || char > 57){
        event.preventDefault();
    }
    
})

document.querySelector("#form_validado").addEventListener('submit',event => {
    event.preventDefault();
    var input_nombre = document.querySelector("#nombre")
    if(input_nombre.value.trim().length < 1){
        input_nombre.classList.remove('is-valid')
        input_nombre.classList.add('is-invalid')
    }else {
        input_nombre.classList.add('is-valid')
        input_nombre.classList.remove('is-invalid')
    }

    var edadInput = document.querySelector("#edad");
    if(edadInput.value == '' || edadInput.value > 100){
        edadInput.setCustomValidity("La edad debe ser entre 1 y 100")
    }
    var input_email = document.querySelector("#email");
    regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*([\. \w{2,4}]?)+$/
    if(!regEmail.test(input_email.value)){
        console.log("Email inválido")
        input_email.classList.remove('is-valid')
        input_email.classList.add('is-invalid')
        //input_email.setCustomValidity("El formato del email no es válido")
        return false;
    }else{
        input_email.classList.remove('is-invalid')
        input_email.classList.add('is-valid')
        //input_email.setCustomValidity("")
    }

    console.log('Formulario enviado');
})

/* ++++++ Expresiones Regulares +++++++ */
var reg = /javascript/;
//var coincide = "hola javascript".match(reg);
var coincide = reg.test("hola javascript")
console.log(coincide)


var reg_1 = /[Jj]avascript/
console.log(reg_1.test("hola Javascript"))


console.log("aa2bb".match(/[0-9]/))

console.log("22 33".match(/[^0-9]/))

console.log("aa2bb".match(/\d/))

console.log("1234".match(/\d{2}/))

console.log("1234".match(/\d{1,3}/))
console.log("1234".match(/\d{3,9}/))

/*
METACARACTERES
\w para letras [a-zA-Z]
\d para numeros [0-9]
\s para espacios en blanco

* equivale a 0 o mas veces {0,}
+ equivale a 1 o mas veces {1,}
? equivale a 0 o 1 vez {0,1}
*/

console.log("a23a".match(/a\d?a/))


console.clear();
//console.log(regEmail.test("juyagu@gmail.com.ar"))
//j@
//jdasf@sdaf
//hola.hola.jose@
//juyagu.hola@gmail.com.ar

//console.log("Hola \"mundo\" \n jajajajajaj \n otro jajajajaja")
console.clear();
var div = document.querySelector('.clasePrincipal');
var parrafo = document.querySelector('.claseParrafo');
var input = document.querySelector('.claseInput');

div.addEventListener('click',function(){
    console.log('DIV');
},false)
parrafo.addEventListener('click',function(){
    console.log('PARRAFO');
},false)
input.addEventListener('click',function(event){
    console.log('INPUT');
    event.stopPropagation();
},false)
