function rotateFunction() {
		document.getElementById("barContainer").classList.toggle("rotateChange");
		document.getElementById("dropdown").classList.toggle("dropColorChange");
		document.getElementById("name").classList.toggle("moveName");
		
	}	

//$(document).ready(function() {
	document.getElementsById("name").onclick = function(event) {
		event.preventDefault();

		const href = this.attr("href");
		window.history.pushState(null, null, href);
		document.getElementsByTagName("a").removeClass("active");
		const name = document.getElementById("name");
		 
	}

	$("#dropdown a").on("click", function (event) {

		document.getElementById("barContainer").classList.toggle("rotateChange");
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