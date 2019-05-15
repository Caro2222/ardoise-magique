"use strict";

function Slate()
{
    this.canvas =document.getElementById("ardoiseMagique");
    this.context = this.canvas.getContext("2d");

    this.formerPosition={x:0,y:0};

    this.isDrawing = false ;


    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));


    var btnEffacer=document.querySelector('input');
    btnEffacer.addEventListener('click',this.efface.bind(this));
   // this dessin=loadFormLocalStorage();
    this.context.lineCap = "round";

}



Slate.prototype.efface =function()
{

    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);

};

Slate.prototype.onMouseMove = function(event)
{
    if(this.isDrawing)
    {
        var currentPosition = this.getMousePosition(event);
        this.draw(currentPosition);
        this.formerPosition = currentPosition ;
    }
};

Slate.prototype.onMouseDown = function()
{

    this.isDrawing = true ;
    this.formerPosition = this.getMousePosition(event);
};
Slate.prototype.onMouseUp = function()
{
    this.isDrawing = false ;
    // console.log("souris relachée") ;
    // this.canvas.removeEventListener('mousemove', this.onMouseMove);
};

Slate.prototype.onMouseLeave = function()
{
    this.isDrawing = false ;
    // console.log("souris relachée") ;
    // this.canvas.removeEventListener('mousemove', this.onMouseMove);
};



Slate.prototype.getMousePosition = function(event)
{
    var offSet;
    var location={};
    var styleOffset= window.getComputedStyle(this.canvas);
    offSet = this.canvas.getBoundingClientRect();
    location.x= event.clientX-offSet.left-parseInt(styleOffset.borderLeftWidth) ;
    location.y=event.clientY-offSet.top-parseInt(styleOffset.borderTopWidth);
    return location;

};




Slate.prototype.draw = function(nextPosition) {
    //context.fillStyle=this.color;
    this.context.beginPath();
    // context.fillStyle = "red";
    this.context.moveTo(this.formerPosition.x, this.formerPosition.y);
    this.context.lineTo(nextPosition.x, nextPosition.y);

    this.context.stroke();
    $.event.trigger('magic-slate:strokeChange');

};
