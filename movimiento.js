let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let velocidad = 20;
let mTop = 0;
let mLeft = 0;
let mTopD = 0;
let mLeftD = 0;
var bd = 0;
var bd2 = 0;
var bd3 = 0;
var width = 1030 - img1.width;

function movimiento(){
    movimiento1();
    movimiento2();
    movimiento3();
}

function movimiento1(){
    if(bd == 0){
        moverDerecha();
        if(mLeft >= width){
            bd = 1;
        }
    }else if(bd == 1){
        moverIzquierda();
        if(mLeft <= 5){
            bd = 0;
        }
    }    
}

function movimiento2(){
    if(bd2 == 0){
        moverAbajo();
        if(mTop >= 410){
            bd2 = 1;
        }
    }else if(bd2 == 1){
        moverArriba();
        if(mTop <= 0){
            bd2 = 0;
        }
    } 
}

function movimiento3(){
    if(bd3 == 0){
        diagonalAbajo();
        if(mTopD >= 250){
            bd3 = 1;
        }
    }else if(bd3 == 1){
        diagonalArriba();
        if(mTopD <= 0){
            bd3 = 0;
        }
    }
}

function moverDerecha(){
    mLeft += velocidad;
    img1.style.marginLeft = mLeft + "px";
}

function moverIzquierda(){
    mLeft -= velocidad;
    img1.style.marginLeft = mLeft + "px";
}

function moverArriba(){
    mTop -= velocidad;
    img2.style.marginTop = mTop + "px";
}

function moverAbajo(){ 
    mTop += velocidad;
    img2.style.marginTop = mTop + "px";
}

function diagonalArriba(){
    mLeftD -= velocidad;
    mTopD -= velocidad;
    img3.style.marginLeft = mLeftD + "px";
    img3.style.marginTop = mTopD + "px";
}

function diagonalAbajo(){
    mLeftD += velocidad;
    mTopD += velocidad;
    img3.style.marginLeft = mLeftD + "px";
    img3.style.marginTop = mTopD + "px";
}