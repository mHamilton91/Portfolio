function rotateFunction() {
		document.getElementById("barMenu").classList.toggle("rotateChange");
		document.getElementById("dropdown").classList.toggle("dropColorChange");
		document.getElementById("name").classList.toggle("moveName");
		
	}	

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";  
	}
	x[slideIndex-1].style.display = "block";  
}

	/*document.getElementsById("name").onclick = function(event) {
		event.preventDefault();

		const href = this.attr("href");
		window.history.pushState(null, null, href);
		document.getElementsByTagName("a").removeClass("active");
		const name = document.getElementById("name");
		 
	}*/

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