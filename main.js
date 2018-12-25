// main.js
// Main JS

// img tag count
var imgCount = 0;

// Find tags in div1
var parentNode = document.getElementById("div1");
var nodeList = parentNode.childNodes;

// Find paragraph to modify
var mParagraph = document.getElementById("paragraph");

// Set background image
var mainBody = document.getElementById("bod");
setBackgroundImage();

// Create new P tag and text node
var newParagraph = document.createElement("p");
var t = document.createTextNode("IMG Tags: ");

// append text to P, add an ID attribute to P,  and  append P to the end of DIV
newParagraph.appendChild(t);
newParagraph.setAttribute("id", "paragraph");

// append in middle of DIV
var target = parentNode.childNodes[1];
parentNode.insertBefore(newParagraph, target.nextSibling);

// Count img tags
for(var i = 0; i < nodeList.length; i++) {
	if( nodeList[i].nodeName.toLowerCase() === "img" ) {
		imgCount++;
	}
}

// Insert count into new P tag
writePara(newParagraph, imgCount);

var titleParagraph = document.createElement("p");
var f = document.createTextNode("Javascript Test");

titleParagraph.appendChild(f);

var titleTarget = parentNode.firstChild;
parentNode.insertBefore(titleParagraph, titleTarget);

titleParagraph.setAttribute("id", "titleParagraph");
titleParagraph.setAttribute("style", "font-size:300%;");
