var numSquare = 6;
var colors = generateColors(numSquare); 
 var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");


easybtn.addEventListener("click",function() {
    hardbtn.classList.remove('selected')
    easybtn.classList.add("selected")
    numSquare = 3;
    colors = generateColors(numSquare);
    pickedColor =pickColor()
    colorDisplay.textContent = pickedColor;

    for( var i =0;i< squares.length;i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";

        }
    }
})
hardbtn.addEventListener("click",function() {
    hardbtn.classList.add('selected')
    easybtn.classList.remove("selected")
    numSquare = 6
    colors = generateColors(numSquare);
    pickedColor =pickColor()
    colorDisplay.textContent = pickedColor;
    for( var i =0;i< squares.length;i++) {
        
            squares[i].style.backgroundColor = colors[i];
       
            squares[i].style.display = "block";

    }
})


resetButton.addEventListener("click", function() {
    colors = generateColors(numSquare)
    pickedColor =pickColor();
    colorDisplay.textContent= pickedColor;
    this.textContent ="New Colors";
    messageDisplay.textContent="";
    for( var i=0;i<squares.length;i++) {
        squares[i].style.backgroundColor =colors[i];
    }
    h1.style.backgroundColor = "steelblue";

})

colorDisplay.textContent = pickedColor;
 for(var i=0; i<squares.length; i++) {
     squares[i].style.backgroundColor = colors[i];
     squares[i].addEventListener("click",function() {
      var clickColor =   this.style.backgroundColor;
        if(clickColor === pickedColor) {
            messageDisplay.textContent ="correct";
            resetButton.textContent =" Play again ?"
            changeColors(clickColor);
            h1.style.backgroundColor =pickedColor;
        } else {
            this.style.backgroundColor= "#232323";
            messageDisplay.textContent="Try Again"
        }
     })
 }          
 function changeColors(color) {
     for(var i=0; i<squares.length;i++) {
     squares[i].style.backgroundColor = color;

     }
 }

 function pickColor (){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random] ;
 }
 function generateColors(num)  {
     var arr =[];
    for(var i=0; i<num;i++) {
      arr.push(randowcolor())  
    }

     return arr;
 }
  function randowcolor() {
   var r= Math.floor(Math.random() *256)  
   var g =Math.floor(Math.random() *256)  
   var b= Math.floor(Math.random() *256) 

   return "rgb(" + r +", " + g + ", "+ b + ")" ;
  }