function rotateFunction() {
		document.getElementById("barContainer").classList.toggle("rotateChange");
		document.getElementById("dropdown").classList.toggle("dropColorChange");
		document.getElementById("name").classList.toggle("moveName");
		
	}	

$(document).ready(function() {
	$("#dropdown a").on("click", function (event) {

		event.preventDefault();

		const href = $(this).attr("href");
		
		window.history.pushState(null, null, href);

		$("#dropdown a").removeClass("active");
		$(this).addClass("active");

		$.ajax({
			url: href,
			successful: function(data) {
				$("#content").fadeOut(2);
			}
		});
		console.log(href);
	});
});