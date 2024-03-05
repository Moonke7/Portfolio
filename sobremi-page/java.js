var info = 0;
var imagen = 1;

var arriba = 1;

let boton = document.getElementById("btn");
let links = document.getElementById("links");
boton.addEventListener("click", function() {
    if(arriba === 1)
    {
        links.style.transition = ".4s";
        links.style.top = "-7vh";
        arriba = 0;
    }
    else{
        links.style.transition = ".8s";
        links.style.top = "-400px";
        arriba = 1;
    }
    
});




