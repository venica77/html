/** 
document.getElementById('boton').onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en js";
}

document.addEventListener('click', function(){
    console.log("hola mundo desde eventlistener");
    document.getElementById("demo").innerHTML="aloja";
});
*/
     document.getElementById('boton').addEventListener('click', function(){
    console.log("hola mundo desde eventlistener");
    document.getElementById("demo").innerHTML="Con su cerebro en llamas";
});

document.getElementById('boton_colour').addEventListener('click', function(){
document.body.style.backgroundColor= '#6C8EAD';
});
document.getElementById('boton_default').addEventListener('click', function(){
    document.body.style.backgroundColor= 'blue ';
});
document.getElementById('boton_ocultar').addEventListener('click', function(){
    document.getElementById("demo").style.display='none' ;
    });

    const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "gray";
}