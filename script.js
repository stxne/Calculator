var headingOne = document.getElementById("title");
var nameInput = document.getElementById("fortune-input");
var result = document.getElementById("fortune-output");
var aestheticButton = document.getElementById("fortune-button");
var numInput = document.getElementById("half-input");
var numButton = document.getElementById("half-button");

numButton.addEventListener("click", calculateHalf);
aestheticButton.addEventListener("click", getAesthetic);



function calculateHalf(){
  var numInputText = numInput.value;
  var numInputNumber = parseFloat(numInputText);
  console.log("half of " + numInputNumber + " is " + numInputNumber/2 + ".");
  alert(numInputNumber/2);
}

function getAesthetic(){
  var typesOfAesthetics = ["Cyberpunk","Cottagecore","Dark Academia","Goth","Alternative",
  "Minimalism","Retro","Kawaii","Indie","Art Deco"];
  var randomAesthetic = Math.floor(Math.random() * typesOfAesthetics.length)
  var nameInputText = nameInput.value;
  result.innerHTML = "Your aesthetic is " + typesOfAesthetics[randomAesthetic] + "!";
  restyle();
}

function restyle(){
  var r = Math.random() * 255;
  var g = Math.random() * 255;
  var b = Math.random() * 255;
  var resultColor = "rgb(" + r + "," + g + "," + b+")";
  result.style.color = resultColor;
  var fonts = ["Henny Penny, cursive","Abril Fatface, cursive","Cinzel, serif",
  "Grenze Gotisch, cursive","Turret Road, cursive","Press Start 2P, cursive",
  "Libre Barcode 128 Text, cursive","Montserrat, sans-serif"];
  var randFonts = Math.floor(Math.random() * fonts.length);
  result.style.fontFamily = fonts[randFonts];
  var textDeco = ["solid","double","dotted","dashed","wavy"];
  var randTextDeco = Math.floor(Math.random() * textDeco.length);
  result.style.textDecorationStyle = textDeco[randTextDeco];
}
