/* EJERCICIO 1: Al pasar por encima de cada uno de los párrafos
deberán cambiar el color del texto, 
el tamaño y el borde. (mouseover y mouseout). */

var parrafos = document.getElementsByTagName("p");

for (let i = 0; i <parrafos.length; i++) {
  parrafos[i].addEventListener("mouseover", arriba);
  parrafos[i].addEventListener("mouseout", fuera);
  
  function arriba(){
    parrafos[i].style.color = "red";
    parrafos[i].style.fontSize = "25";
    parrafos[i].style.border = "1px solid black";
  }

  function fuera (){
    parrafos[i].style.color = "black";
    parrafos[i].style.fontSize = "16";
    parrafos[i].style.border = "none";
  }
}

/* EJERCICIO 2: En el formulario de contacto se deberá “guardar” el nombre 
e imprimir en un div vacío el contenido “Gracias [nombre ingresado] por comunicarse con nosotros”. 
Los datos se guardarán con el botón. 
 */


var nombre = document.getElementById("name").value;

nombre.addEventListener("submit", enviar);

function enviar(){
  nombre.innerHTML
}
    


/* EJERCICIO 3: Los 4 botones serán utilizados para cambiar el color del background de la página 
(se puede también usar background imagen. (click o onclick)
 */



var color = document.getElementsByClassName("rojo")[0]

color.addEventListener("click", fondo1);

function fondo1(){
document.getElementById("body").style.backgroundColor = "red";
}



var color = document.getElementsByClassName("verde")[0]

color.addEventListener("click", fondo2);

function fondo2(){
document.getElementById("body").style.backgroundColor = "green";
}



var color = document.getElementsByClassName("azul")[0]

color.addEventListener("click", fondo3);

function fondo3(){
document.getElementById("body").style.backgroundColor = "blue";
}



var color = document.getElementsByClassName("amarillo")[0]

color.addEventListener("click", fondo4);

function fondo4(){
document.getElementById("body").style.backgroundColor = "yellow";
}



var color = document.getElementsByClassName("imagen")[0]

color.addEventListener("click", fondo5);

function fondo5(){
document.getElementById("body").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YWOYt0JTwCtgE-MjrEid5x8ANohFU6IEcHvqaxl01KHihe9Deqq94guWA2s8pdFXAUc&usqp=CAU')";
}




/* EJECICIO 4: Dentro del primer div vacío deberás crear un elemento imagen (createElement)
 y asignarlo a ese div (appendChild). Todo eso se hará una vez se clickee el botón restante.
 */

