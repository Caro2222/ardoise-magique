"use strict";


function Program()
{
    this.slate = new Slate();
    this.palette = new Palette();
    this.bross= new Bross();



    $(document).on('magic-slate:colorchange',this.onColor.bind(this));
    $(document).on('magic-slate:strokeChange',this.onStrokeChange.bind(this));

}

Program.prototype.onColor =function()
{
    this.palette.applytoContext( this.slate.context) ;
};

Program.prototype.onStrokeChange =function()
{
    this.bross.applytoContextBross( this.slate.context) ;
};
