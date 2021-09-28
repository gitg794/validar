//esta funcion valida el elemento input del formulario
function validar(){
    //variable que usaremos para determinar si el input es valido
    var s_valida = false;

    //input que queremos validar
    const input = document.forms['validacionForm']['letras'];

    //el div con el mensaje de advertencia
    const mensaje = document.getElementById('mensaje');
    input.willValidate =false;

    //tamaño maximo de nuestro input
    const maximo= 35;

    //expresion regular; llamado a la funcion constructora del objeto RegExp
    const construc = new RegExp('^[A-Z]+$', 'i');
    //primera validacion: si el input es vacio
    if(!input.value){
        s_valida=false;
    }else if(input.value.length > maximo){//segunda validacion, si input es mayor que 35
        s_valida=false;
    }else if(!construc.test(input.value)){
        s_valida=false;
    }else{ //si pasamos todas las validaciones ponemos la variable en true
        s_valida=true;
    }
    //cambio del borde de nuestro input
    if(!s_valida){
        // rojo: dice que no es valido
        input.style.borderColor = 'salmon';
        //mostar el div oculto
        mensaje.hidden = false;
    }else{
        input.style.borderColor = 'palegreen';
        //ocultar div de error
        mensaje.hidden = true;

    return s_valida;    
    }

} //fin funcion validar()

//funcion verificar utilizo el boton

function verificar(){

    const valido = validar();
    if(!valido){
        alert("El campo no es valido");
    }else{
        alert("El campo es valido");
    }
}//fin funcion verificar()


//funcion para poner la primera letra en mayuscula

function Mayuscula(){

    var input_L = document.getElementById("primera_L");
    var texto = document.getElementById("modificado");
    var letras = input_L.value;

    texto.innerHTML = letras[0].toUpperCase() + letras.slice(1);
} //fin funcion Mayuscula() jose

 