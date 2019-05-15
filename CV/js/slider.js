document.addEventListener("DOMContentLoaded",function(){
'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
	var domElements = {};
	
	const TOUCH_ESPACE=32;
	const TOUCH_GAUCHE=37;
	const TOUCH_DROITE=39;

	var state={};
	state.index=0;
	state.timer=null;
	
	var images= [
		{imgSrc:"images/captureBlog1.png",
		legend:"Partie admin du blog"},
		{imgSrc:"images/captureBlog2.png",
		legend:"Page d'un article, possibilité d'ajouter des commentaires"},
		{imgSrc:"images/captureBlog3.png",
		legend:"Page d'accueil partie admin ,possibilité de supprimer ,modifier et rajouter  des articles"},
		{imgSrc:"images/captureBlogC.png",
		legend:"Page création d'un article"},
		{imgSrc:"images/captureBlog5.png",
		legend:"Page modifier un article pour l'admin "},
		{imgSrc:"images/captureBlogA.png",
		legend:"Page d'accueil"}
	];
 

	function initialize() {
	
	domElements.barreOutil=document.querySelector("#toolbar-toggle");
	 domElements.nav=document.querySelector(".toogle-bar")
	 domElements.play=document.querySelector("#slider-toggle");
	 domElements.images=document.querySelector("img");
	 domElements.next=document.querySelector("#slider-next");
	 domElements.figcaption=document.querySelector("figcaption");
	 domElements.prev=document.querySelector("#slider-previous");

	};



	/*************************************************************************************************/
	/* ***************************************** FONCTIONS ***************************************** */
	/*************************************************************************************************/
	function requestRandomIntegrer(min,max)
	{
		return  min + Math.floor(Math.random()*(max-min+1));

	};

	function installEventListener(selector, type, eventHander) {
		var domElement;
		domElement= document.querySelector(selector);
		domElement.addEventListener(type,eventHander);
	};

	
	

	function afficher (){
	domElements.nav.classList.toggle("sliders")
	domElements.i= document.querySelector("i")
	domElements.i.classList.toggle("fa-arrow-up")
	domElements.i.classList.toggle("fa-arrow-down")
	};


	function refresh() {
		domElements.images.src=images[state.index].imgSrc;
		domElements.figcaption.textContent=images[state.index].legend;

	}

	function suivant () {
	 state.index++;
	 if(state.index == images.length) {
	 	state.index=0;
	 }
	 refresh();	

		
	}

	function prev () {
		state.index--;
		if(state.index ==-1) {
			state.index=images.length-1;
		}
		refresh();
	}

	function random () {
		state.index= requestRandomIntegrer(0,5);
		refresh();

	}

	

	function demarrer () {
		
		if(state.timer) {
		clearInterval(state.timer);
		state.timer=null;
			
		} else {
		domElements.play.classList.toggle("fa-pause");
		state.timer =setInterval(suivant,2000);

		}

	}

	function  keyInputHandler(event) {
		if(event.keyCode== TOUCH_DROITE) {
			suivant()
		} else if (event.keyCode ==TOUCH_GAUCHE) {
			prev()
		} else if(event.keyCode == TOUCH_ESPACE) {
			demarrer()
		}
	};


	/*************************************************************************************************/
	/* ************************************** CODE PRINCIPAL *************************************** */
	/*************************************************************************************************/
	
	initialize();
	document.addEventListener("keyup",keyInputHandler);
	installEventListener("#toolbar-toggle","click",afficher) ;
	installEventListener("#slider-next","click",suivant) ;
	installEventListener("#slider-previous","click",prev);
	installEventListener("#slider-random","click",random);
	installEventListener("#slider-toggle","click",demarrer);
	

});

