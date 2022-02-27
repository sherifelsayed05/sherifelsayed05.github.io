var myImages =["Capture.PNG", "Capture2.PNG","Capture3.PNG","Capture4.PNG","Capture6.PNG"];


var captionImages =["Customize your rhombus","Put dots anywhere","Create your grocery list","Learn your multiplication","Create an account"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false);

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}

setInterval(autoSlide,2000); // Next
