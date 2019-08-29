function rotateFunction() {
		document.getElementById("barMenu").classList.toggle("rotateChange");
		document.getElementById("dropdown").classList.toggle("dropColorChange");
		document.getElementById("name").classList.toggle("moveName");
		
	}	

if(window.location.pathname == '/graphics.html'){
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
						"backspaceFlyer.png",
						"ForestTriangle.jpg",
						"greenCave.png",
						"cave.png"]
		if (n > 18) {slideIndex = 1}
		if (n < 1) {slideIndex = 18}
		let imgSlide = document.querySelector(".slider");

		imgSlide.style.background = `url(${images[slideIndex-1]}) no-repeat scroll center center`;
		imgSlide.style.backgroundSize = "contain";
	}
}