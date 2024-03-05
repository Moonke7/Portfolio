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




let grua1 = document.getElementById("gruasmcv1");
let sweet = document.getElementById("sweetbyte");
let grua2 = document.getElementById("gruasmcv2");

let grua1_img = document.getElementById("img_grua1");
let sweet_img = document.getElementById("img_sweet");
let grua2_img = document.getElementById("img_grua2");

let grua1_hover = document.getElementById("hover_gruas1");
let sweet_hover = document.getElementById("hover_sweet");
let grua2_hover = document.getElementById("hover_gruas2");

function esconder_mostrar_img(x, y){
    if(imagen === 1){
        imagen = 0;
        x.style.opacity = "0";
        x.style.transition = ".8s"
        y.style.height = "90%"
        y.style.transition = ".8s"
    }
    else {
        imagen = 1;
        x.style.opacity = "1";
        x.style.transition = ".8s"
        y.style.height = "170%"
        y.style.transition = ".8s"

    }
}
function esconder(x, y){
    x.style.opacity = "0";
    x.style.transition = ".8s";
    y.style.height = "90%";
    y.style.transition = ".8s";
}


grua1.addEventListener("click", function(){
    esconder_mostrar_img(grua1_img, grua1_hover);
});
sweet.addEventListener("click", function(){
    esconder_mostrar_img(sweet_img, sweet_hover);
})
grua2.addEventListener("click", function(){
    esconder_mostrar_img(grua2_img, grua2_hover);
});


let grua1_info = document.getElementById("gruasinfo1");
let sweet_info = document.getElementById("sweetinfo");
let grua2_info = document.getElementById("gruasinfo2");

let btn1 = document.getElementById("boton1");
let btn2 = document.getElementById("boton2");
let btn3 = document.getElementById("boton3");

let container = document.getElementById("container")

function inform(x, y){
    x.style.top = "25%";
    x.style.transition = "0.5s";
    y.style.zIndex = "-1";
    y.style.opacity = ".3";
    y.style.transition = ".3s"
}

btn1.addEventListener("click", function(){
    inform(grua1_info, container);
});
btn2.addEventListener("click", function(){
    inform(sweet_info, container);
})
btn3.addEventListener("click", function(){
    inform(grua2_info, container);
})

let cerrar1 = document.getElementById("cerrar1")
let cerrar2 = document.getElementById("cerrar2")
let cerrar3 = document.getElementById("cerrar3")


cerrar1.addEventListener("click", function(){
    grua1_info.style.top = "-100vh";
    container.style.zIndex = "100";
    container.style.opacity = "1";
})
cerrar2.addEventListener("click", function(){
    sweet_info.style.top = "-100vh";
    container.style.zIndex = "100";
    container.style.opacity = "1";
})
cerrar3.addEventListener("click", function(){
    grua2_info.style.top = "-100vh";
    container.style.zIndex = "100";
    container.style.opacity = "1";
})

