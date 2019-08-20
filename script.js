function rotateFunction() {
		document.getElementById("barContainer").classList.toggle("rotateChange");
		document.getElementById("dropdown").classList.toggle("dropColorChange");
		document.getElementById("name").classList.toggle("fadeName");
		
	}	

$(document).ready(function() {
	$("#dropdown a").on("click", function (event) {

		event.preventDefault();

		const href = $(this).attr("href");
		console.log(href);
		window.history.pushState(null, null, href);


	});
});