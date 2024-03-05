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
let link_proyectos = document.getElementById("link_proyectos")
link_proyectos.addEventListener("click", function(){
    window.location.href = 'proyecto-page/proyecto.html';
})

let link_am = document.getElementById("link_sobre-mi")
link_am.addEventListener("click", function(){
    window.location.href = 'sobremi-page/sobremi.html';
})