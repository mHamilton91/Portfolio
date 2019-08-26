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
	var container = document.getElementById("slider");
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
	console.log(slideIndex);
	console.log(`Image is ${images[slideIndex-1]}`);
	container.style.background = `url(${images[slideIndex-1]}) no-repeat scroll center center`
	container.style.backgroundSize = "contain";
}

//$(document).ready(function() {
	

	$("#dropdown a").on("click", function (event) {

		document.getElementById("barMenu").classList.toggle("rotateChange");
		document.getElementById("dropdown").classList.toggle("dropColorChange");
		document.getElementById("name").classList.toggle("moveName");

		event.preventDefault();

		const href = $(this).attr("href");
		
		window.history.pushState(null, null, href);

		$("#dropdown a").removeClass("active");
		$(this).addClass("active");

		$.ajax({
			url: href,
			success: function (data) {
			  $("section").fadeOut(500, function () {
				const newPage = $(data).filter("section").html();
				
				$("section").html(newPage);
				
				$("section").fadeIn(1000);
			  });
			}
		  });
	});
//});