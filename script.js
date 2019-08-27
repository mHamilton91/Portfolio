function rotateFunction() {
		document.getElementById("barMenu").classList.toggle("rotateChange");
		document.getElementById("dropdown").classList.toggle("dropColorChange");
		document.getElementById("name").classList.toggle("moveName");
		
	}	

var slideIndex = 1;
slideShow(slideIndex);

function slideChange(n) {
	slideShow(slideIndex += n);
}

function slideShow(n) {
	var images = ["GhostBeer.png",
					"GreyjoyBeer.png",
					"lannisterBeer.png",
					"nightsWatchBeer.png",
					"targaryenBeer.png",
					"winterfellBeer.png",
					"leonaGlitch.png",
					"leonaParticle.png",
					"leonaAlbum.png",
					"Thieves_Hollow_Logo_Name.png",
					"Thieves_Hollow_Logo_Name_Pizza.png",
					"Thieves_Hollow_Logo_Name_Purple.png",
					"Thieves_Hollow_Logo_Name_Space.png",
					"Thieves_Hollow_Logo_Name_Stripes.png",
					"backspaceFlyer.png"]
	if (n > 15) {slideIndex = 1}
	if (n < 1) {slideIndex = 15}
	document.getElementById("slider").style.background = `url(${images[slideIndex-1]}) no-repeat scroll center center`
	document.getElementById("slider").style.backgroundSize = "contain";
}

//$(document).ready(function() {
	

	
//});