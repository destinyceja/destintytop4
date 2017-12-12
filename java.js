//Plays function by finding the ID in the HTML File on the bottom of the code//
//Pause funtion to restrict so that their only be one song playing at a time//
function play1(){
document.getElementById("strangerthings").play();
document.getElementById("americanhorror").pause();
   document.getElementById("riverdale").pause();
   document.getElementById("thegetdown").pause();
}

//Plays function by finding the ID in the HTML File on the bottom of the code//
//Pause funtion to restrict so that their only be one song playing at a time//
function play2(){
document.getElementById("americanhorror").play();
  document.getElementById("strangerthings").pause();
   document.getElementById("riverdale").pause();
   document.getElementById("thegetdown").pause();
}

//Plays function by finding the ID in the HTML File on the bottom of the code//
//Pause funtion to restrict so that their only be one song playing at a time//
function play3(){
document.getElementById("riverdale").play();
  document.getElementById("americanhorror").pause();
   document.getElementById("strangerthings").pause();
   document.getElementById("thegetdown").pause();
}

//Plays function by finding the ID in the HTML File on the bottom of the code//
//Pause funtion to restrict so that their only be one song playing at a time//
function play4(){
document.getElementById("thegetdown").play();
  document.getElementById("americanhorror").pause();
   document.getElementById("riverdale").pause();
   document.getElementById("strangerthings").pause();
}

// This function is run when the user clicks on the image on LINE 18 of your HTML (Vegeta powering up)
function changePicture(e){
	document.getElementById("stranger").classList.toggle("things");
}

