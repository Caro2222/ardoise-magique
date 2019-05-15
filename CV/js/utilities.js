'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/


function requestInteger(message,min,max)
{
    //elle demande un entier tant que l'entier n'est pas entre le min et le max et le retourne
    var nbr;
    do
    {
        nbr =parseInt(window.prompt(message))

    }
    while(!isNaN(nbr)&&(min<nbr)&&(nbr>max) )
    return nbr;
};
// requestInteger( "entrer un nombre",5,10)


function getRandomIntegrer(min,max)
{
    return  min + Math.floor(Math.random()*(max-min+1));

};

function showImage(src)
{
    document.write('<img src ="'+src+'">');
} ;

function clamp (nbr,min,max)
{
    if(min<max)
    {
        return Math.min(max,Math.max(min,nbr));
    }
    else
    {
        return Math.min(min,Math.max(max,nbr));
    }
};

function installEventListener(selector, type, eventHander) {
    var domElement;
    domElement= document.querySelector(selector);
    domElement.addEventListener(type,eventHander);
};

function getRandomColor() {
    var red =getRandomIntegrer(0,255);
    var green=getRandomIntegrer(0,255);
    var blue=getRandomIntegrer(0,255);
    var opacity= Math.random();
    return "rgba("+ red+","+green+","+blue+","+opacity+")";
}

function loadFormLocalStorage(name)
{
    var jsonData= window.localStorage.getItem(name);
    return JSON.parse(jsonData);
}

function savetoLocalStorage (data,name)
{
    var jsonData=JSON.stringify(data);
    localStorage.setItem(name,jsonData);
}




