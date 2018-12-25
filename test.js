// test.js
// Function Calls (DOM Objects)

// Image Objects
var img = document.getElementById("imgt");
var img2 = document.getElementById("imga");

img.onmouseover = function() {
	mouseOver();
};

img.onmouseout = function() {
	mouseOut();
};

// Paragraph Objects
var par = document.getElementById("paragraph");
var par2 = document.getElementById("titleParagraph");

par.onmouseover = function() {
	parMouseOver();
};

par.onmouseout = function() {
	parMouseOut();
};

par.onclick = function() {
	paraClick();
};

par2.onclick = function() {
	titleClick();
};
