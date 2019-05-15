"use strict";
function Palette() {



    this.canvas=document.getElementById("ColorPicker");
    this.context = this.canvas.getContext("2d");
    this.color = "rgba(0,0,0)" ;
    //this.setColor(gradient);
    //this.setPosition(50,30);

    this.canvas.addEventListener('mousemove',this.onMouseMove.bind(this));

    this.canvas.addEventListener('click',this.onClick.bind(this));

    this.btnDisplay= $("#btnDisplay");
    this.colorSample = $("#picker");
    this.btnDisplay.on('click',this.afficherPalette.bind(this));

    this.draw();
    this.colorSample.hide();

}
Palette.prototype.afficherPalette =function(){
    this.colorSample.show()
}

// Palette.prototype.onMouseDown = function()
// {
//     this.formerPosition = this.getMousePosition(event);
// };

// Palette.prototype.setColor = function (color) {
//     this.color = color;
//     return this;
// };
//

Palette.prototype.applytoContext=function(ctx){

    ctx.strokeStyle=this.color;
};

Palette.prototype.onMouseMove =function(e)
{
    this.onColorChange(e) ;
};

Palette.prototype.onClick = function(e)
{
    this.color = this.onColorChange(e);
    $.event.trigger('magic-slate:colorchange');
    this.colorSample.hide();

};

Palette.prototype.onColorChange =function(e){
    var position = this.getMousePosition(e) ;
    var pixel = this.context.getImageData(position.x,position.y,1,1).data;

    var rgb = "rgb("+ pixel[0]+","+pixel[1]+","+pixel[2]+")";
    this.colorSample.css('background-color',rgb) ;
    this.colorSample.text(rgb);

    return rgb;
};

Palette.prototype.getMousePosition = function(event)
{
    var offSet;
    var location={};
    var styleOffset= window.getComputedStyle(this.canvas);
    offSet = this.canvas.getBoundingClientRect();
    location.x= event.clientX-offSet.left-parseInt(styleOffset.borderLeftWidth) ;
    location.y=event.clientY-offSet.top-parseInt(styleOffset.borderTopWidth);
    return location;
};

Palette.prototype.draw = function() {


    var gradient = this.context.createLinearGradient(0,0,this.canvas.width, 0);
    gradient.addColorStop(0,"rgb(255, 0, 0)");
    gradient.addColorStop(0.2,"rgb(255, 255, 0)");
    gradient.addColorStop(0.4,"rgb(0, 255, 0)");
    gradient.addColorStop(0.6,"rgb(0, 255, 255)");
    gradient.addColorStop(0.8,"rgb(0, 0, 255)");
    gradient.addColorStop(1,"rgb(255, 0, 255)");

    this.context.fillStyle =gradient;


    this.context.fillRect(0,0,this.canvas.width,this.canvas.height);

    gradient= this.context.createLinearGradient(0,0,0,this.canvas.height);
    gradient.addColorStop(0,"rgba(255,255,255,1");
    gradient.addColorStop(0.5,"rgba(255,255,255,0");
    gradient.addColorStop(0.5,"rgba(0,0,0,0");
    gradient.addColorStop(1,"rgba(0,0,0,1");

    this.context.fillStyle =gradient;
    this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
};


