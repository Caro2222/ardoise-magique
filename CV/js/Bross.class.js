"use strict";

function Bross() {

   this.btnBross=$("#btnBross");
   // this.bigSize=$("#bigSize");
   // this.littleSize=$("#littleSize");
   //  this.mSize=$("#mSize");
    this.divTaille= $("#btns");
    this.range=$("#rangeSize");
    this.sizStroke=2;
    $(this.range).on('input',this.rangeDisplay.bind(this));
    $(this.range).on('change',this.rangeChange.bind(this));

    // $(this.bigSize).on('click',this.bigStroke.bind(this));
    // $(this.mSize).on('click',this.mStroke.bind(this));
    //
    // $(this.littleSize).on('click',this.smallStroke.bind(this));
    $(this.btnBross).on('click',this.displayBtn.bind(this));
    this.divTaille.hide();
    this.rangeDis=$("#displaySize");



}


Bross.prototype.applytoContextBross =function(ctx){

    ctx.lineWidth=this.sizStroke;

};

Bross.prototype.rangeDisplay =function(){
    this.rangeDis.text(this.range.val());
};

Bross.prototype.rangeChange =function()
{
    this.sizStroke = this.range.val();

    $.event.trigger('magic-slate:strokechange');


    console.log("fdsgds");
};

// Bross.prototype.bigStroke = function() {
//     this.sizStroke=4;
//     this.divTaille.hide();
// };
//
// Bross.prototype.smallStroke = function() {
//     this.sizStroke=1;
//     this.divTaille.hide();
//
// };
//
// Bross.prototype.mStroke = function() {
//     this.sizStroke=2;
//     this.divTaille.hide();
//
// };


Bross.prototype.displayBtn =function() {
    this.divTaille.show();
};