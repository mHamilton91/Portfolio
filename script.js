function rotateFunction() {
		document.getElementById("barContainer").classList.toggle("rotateChange");
		document.getElementById("dropdown").classList.toggle("dropColorChange");
		document.getElementById("name").classList.toggle("moveName");
		
	}	

//$(document).ready(function() {
	$("#dropdown a").on("click", function (event) {

		function rotateFunction() {
			document.getElementById("barContainer").classList.toggle("rotateChange");
			document.getElementById("dropdown").classList.toggle("dropColorChange");
			document.getElementById("name").classList.toggle("moveName");
			
		}

		event.preventDefault();

		const href = $(this).attr("href");
		
		window.history.pushState(null, null, href);

		$("#dropdown a").removeClass("active");
		$(this).addClass("active");

		$.ajax({
			url: href,
			success: function (data) {
			  $("section").fadeOut(2000, function () {
				const newPage = $(data).filter("section").html();
				
				$("section").html(newPage);
				
				$("section").fadeIn(2000);
			  });
			}
		  });
	});
//});