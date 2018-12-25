// func.js
// Function Responses

var saveText = "";

function mouseOver() {
        img.src="after.png";
}

function mouseOut() {
        img.src="before.png";
}

function parMouseOver() {
	par.innerHTML = "Click me!";
}

function parMouseOut() {
	par.innerHTML = saveText;
}

function writePara(para, count) {
        para.innerHTML = para.innerHTML +  count.toString();
	saveText = para.innerHTML;
}

function setBackgroundImage() {
	mainBody.background = "background.jpeg";	
	mainBody.setAttribute("style", "background-size: 1920px 1080px;");
}

function paraClick() {
	img2.src = "before.png";
}

function titleClick() {
	img2.src = "after.png";
}
