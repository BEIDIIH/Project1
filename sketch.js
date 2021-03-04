/***********************************************************************************
	Project 1
	by Beidi Han


------------------------------------------------------------------------------------
	Notes:
	- I got some troubles on doing the pop up explanation for knife and the dead body.


***********************************************************************************/

// Variable of scene
var bedroom;
var enter;
var door;

//Variable of tool
var knife;
var news;
var phone;
var search;
var tel;
var blood;
var wakeup;
var text1;

//Variable of main stuff
var body;
var bottom;
var mirror;
var you;

// variable that is a function 
var drawFunction;

// load all images into an array
function preload() {
  bedroom = loadImage("assets/bedroom.png");
  enter = loadImage('assets/enter.png');
  door = loadImage('assets/door.png');

  knife = loadImage('assets/knife.png');
  news = loadImage('assets/news.png');
  phone = loadImage('assets/phone.png');
  search = loadImage('assets/search.png');
  tel = loadImage('assets/tel.png');
  blood = loadImage("assets/blood.png");
  wakeup = loadImage("assets/wakeup.png");
  text1 = loadImage("assets/text1.png");
  text2 = loadImage("assets/text2.png");


  body = loadImage('assets/body.png');
  bottom = loadImage('assets/bottom.png');
  mirror = loadImage('assets/mirror.png' );
  you = loadImage('assets/you.png');

}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(1280, 720);

  // Center drawing objects
  imageMode(CENTER);
  textAlign(CENTER);

  // set to one for startup
  drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(255);


  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========


//-- drawSplash() will draw the image at index 4 from the array
drawSplash = function() {
  background(0);
  image(wakeup, width/2, height/2);
}


// Drawdead will show the dead body
drawDead = function() {
  background(255);
  image(blood, width/2, height/2,
  	blood.width / 2, blood.height / 2);
  image(body, width/2, height/2);
}


// drawOptions contain different options for the audience to make their choice
drawOptions = function() {
  background(255);

  //Blood on the bottoom layer
  image(blood, width/2, height/2,
  	blood.width / 2, blood.height / 2);

  //Dead Body
  image(body, width/2, height/2);

  //Door for escape
  image(door, width - 100, 150);

  //Door for enter the other room
  image(enter, 150, 150);

  //The search tool icon
  image(search, width/2 + 200, height/2 + 80,
  	search.width / 2 - 900, search.height / 2 - 900);

  //The phone icon
  image(phone, 1200, 650,
  	phone.width / 2 - 900, phone.height / 2 - 900);
  
}

//Bedroom
drawBedroom = function() {
	background(255);
	image(bedroom, width/2, height/2,
		bedroom.width * 1.5, bedroom.height * 1.5);
	image(knife, width/2 + 150, height - 80,
		knife.width / 2, knife.height / 2);
	fill(0);
	circle(width - 100, height - 50, 100);
	fill(255);
	text("return", width - 100, height - 45);
	textSize(30);
}

//Check the knife
drawBottom = function() {
	background(255);
	image(bottom, width/2, -150,
		bottom.width * 2, bottom.height * 2);
	image(knife, width/2, height/2 - 100,
		knife.width / 1.5, knife.height / 1.5);
	fill(0);
	circle(width - 100, height - 50, 100);
	fill(255);
	text("Stand Up", width - 100, height - 45);
	textSize(23);

}

//After you stand up
drawMirror = function() {
	background(255);
	image(mirror, width/2, height/2,
		mirror.width * 1.5, mirror.height * 1.5);
}

//Real Ending
drawEnd = function() {
	background(0);
	image(blood, width/2, height/2,
		blood.width / 2, blood.height / 2);
	fill(255);
	text("Real Ending", width/2, height/2);
	textSize(50);
}

//If you click the phone
drawPhone = function() {
	background(255);
	image(phone, width/2, height/2,
		phone.width / 3, phone.height /3);
	fill(0);
	textSize(100);
	text("911", width/2, height/2 -100);
	image(tel, width/2, height/2 + 150,
		tel.width / 15, tel.height /15);
}

//After you pressed the tel icon
drawNews = function() {
	background(255);
	image(news, width/2, height/2,
		news.width / 2, news.height / 2);

}

//The content of Newspaper
drawContent1 = function(){
	background(0);
	image(text1, width/2, height/2,
		text1.width * 1.5, text1.height * 1.5);
	
}

//Runaway from the crime scene
drawEscape = function(){
	background(255);
	image(news, width/2, height/2,
		news.width / 2, news.height / 2);
}

//The content of Newspaper
drawContent2 = function(){
	background(0);
	image(text2, width/2, height/2);
	
}

function mousePressed() {
  //Splash to the Deadbody
if (drawFunction === drawSplash) {
  	if ((mouseX > 440) && (mouseX < 840) && (mouseY > 300) && (mouseY < 400)){
			drawFunction = drawDead;
  }
}
else if (drawFunction === drawDead) {
		drawFunction = drawOptions;
	}
else if (drawFunction === drawOptions) {
	//go to other rooms
	if ((mouseX > 100) && (mouseX < 350) && (mouseY > 0) && (mouseY < 250)){
		drawFunction = drawBedroom;
	}

	//clicked the phone
	if ((mouseX > 1180) && (mouseX < 1230) && (mouseY > 550) && (mouseY < height)){
		drawFunction = drawPhone;
	}

	//If you choose to click the door on the right side to escape
	if ((mouseX > width - 160) && (mouseX < width) && (mouseY > 0) && (mouseY < 280)){
		drawFunction = drawEscape;
	}

	//If you clicked the glass to search
	if ((mouseX > width/2 + 170) && (mouseX < width/2 + 230) && (mouseY > height/2 + 120) && (mouseY < height/2 + 40)){

	}

}

//BedRooms
//check the knife
else if (drawFunction === drawBedroom){
	if ((mouseX > width/2 + 80) && (mouseX < width/2 + 250) && (mouseY > height - 150) && (mouseY < height - 40)){
		drawFunction = drawBottom;
	}
	//return to make other choice
	if ((mouseX > width - 150) && (mouseX < width -50) && (mouseY > height - 100) && (mouseY < height)){
		drawFunction = drawOptions;
	}
	if ((mouseX > 300) && (mouseX < 580) && (mouseY > 80) && (mouseY < height - 80)){
		drawFunction = drawMirror;
	}
}

//Stand Up
else if (drawFunction === drawBottom){
	if ((mouseX > width - 150) && (mouseX < width -50) && (mouseY > height - 100) && (mouseY < height)){
		drawFunction = drawMirror;
	}
}

//Clicked the phone
else if (drawFunction === drawPhone){
	if ((mouseX > width/2 - 50) && (mouseX < width/2 + 50) && (mouseY > height/2 + 100) && (mouseY < height/2 + 200)){
		drawFunction = drawNews;
	}
}

//Click the newspaper to read the content
else if (drawFunction === drawNews){
	if ((mouseX > width/2 - 100) && (mouseX < width/2 + 100) && (mouseY > height/2 - 200) && (mouseY < height/2 + 200)){
		drawFunction = drawContent1;
	}
}
//Return to the start
else if (drawFunction === drawContent1){
	drawFunction = drawSplash;
}

//Click the newspaper to read the content
else if (drawFunction === drawEscape){
	if ((mouseX > width/2 - 100) && (mouseX < width/2 + 100) && (mouseY > height/2 - 200) && (mouseY < height/2 + 200)){
		drawFunction = drawContent2;
	}
}

//Return to the start
else if (drawFunction === drawContent2){
	drawFunction = drawSplash;
}

//Ending
else if (drawFunction ===drawMirror){
	drawFunction = drawEnd;
}


//Return to the start
else if (drawFunction === drawEnd){
	drawFunction = drawSplash;
}
}


