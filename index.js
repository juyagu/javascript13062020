function saludar(){
    setTimeout(function(){
        //console.log('Hola a todas y a todos!!!!')
        //document.querySelector("#titulo1").innerHTML = "Hola a todas y a todos!!!!"
        console.log("Saludar con 3 segundos de delay")
    },3000)
}


function saludarAhora(){
    //document.querySelector("#titulo2").innerHTML = "Hola a todas y a todos AHORA!!!!"
    console.log("Saludar Ahora!")
}

function saludarPorqueSi(){
    setTimeout(function(){
        //document.querySelector("#titulo3").innerHTML = "Hola a todas y a todos porque si!!!!"
        console.log("Saludar porque si")
    },0)
}

function ejecutarFunciones(){
    saludarPorqueSi()
    saludar()
    saludarAhora()
}


function multiplicar(n){
    setTimeout(function(){
        return n * n;
    })
}

function cuadrado(n){
    return multiplicar(n);
}

function imprimirResultado(n){
    console.log(`El cuadrado del número ${n} es ${cuadrado(n)}`)
}


function soyOtraFuncion(nombre){
    console.log(`Hola estimad@ ${nombre}`)
}
setInterval(function(){ soyOtraFuncion('Mariana') }, 3000);
//saludar()