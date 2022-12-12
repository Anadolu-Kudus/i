$(document).ready(function () {

	// Close Nav When Click On it
	var WinWidth32 = $(window).width()

	if (WinWidth32 < 992) {
		$('.nav-link').on('click', function () {
			$('#nav-container').removeClass('show');
		});
		$(window).on("scroll", function () {
			$('#nav-container').removeClass('show');

		})
	}

	// Set Value of attr lang
	// Set All Style 
	var langV = localStorage.getItem('lang') || 'tr';
	$('html').attr('lang', langV);

	const bootstrapEn = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/css/bootstrap.min.css';
	const bootstrapAr = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/css/bootstrap.rtl.min.css';

	// console.log(langV)
	if (langV == 'ar') {
		$('.bootstrap-lang').attr('href', bootstrapAr);
	} else {
		$('.bootstrap-lang').attr('href', bootstrapEn);
	}

	// Color


	// اذا كانت الشاشة شاشة كومبيوتر حصرا طبق ما يلي 
	//  ليست شاشة موبايل 
	if (!window.matchMedia("(pointer: coarse)").matches) {
		$(".color-container").hover(
			function () {
				$("#control-color-theme").addClass("rotate-control");
				$("div.collor").addClass("open-collor")
			},
			function () {
				$("#control-color-theme").removeClass("rotate-control");
				$("div.collor").removeClass("open-collor")
			}

		)
	}
	// اذا كانت الشاشة شاشة موبايل حصرا طبق ما يلي 
	if (window.matchMedia("(pointer: coarse)").matches) {

		$("#control-color-theme").click(function () {
			$(this).toggleClass("rotate-control");
			$("div.collor").toggleClass("open-collor")
		})
		// Hide Box That Contain Span Color
		$(window).on("scroll", function () {
			$("#control-color-theme").removeClass("rotate-control");
			$("div.collor").removeClass("open-collor")
		})
	}

	// Themes Change
	$(".collor span").click(function () {

		T_color = $(this).attr("data-color");

		$("#control-color-theme").removeClass("rotate-control");
		$("div.collor").removeClass("open-collor")

		console.log(T_color + "the color");

		// البنفسجي
		if (T_color == "#800080") {
			$(".themes").attr("href", "css/purple.css");
		}
		// ازرق
		else if (T_color == "#343cff") {
			$(".themes").attr("href", "css/blue.css");
		}
		// زهري
		else if (T_color == "#cc0066") {
			$(".themes").attr("href", "css/pink.css");
		}
		// اخضر
		else if (T_color == "#44B92D") {
			$(".themes").attr("href", "css/green.css");
		}
		// برتقالي
		else {
			$(".themes").attr("href", "css/orange.css");
		}

	})


	// من أجل صفحات خدماتنا وأدوات البرنامج
	var windowWidth_2 = $(window).width();
	if (windowWidth_2 < 768) {
		$('.media').attr('data-aos-delay', 300).attr('data-aos-duration', 500);
	}


	// Up Arrow Click
	$(window).on("scroll", function () {
		if (langV == 'ar') {
			if ($(window).scrollTop() > 25) {
				$("#up-arrow").css({ "opacity": "1", "transform": "translateX(0%)" })
			} else {
				$("#up-arrow").css({ "opacity": "0", "transform": "translateX(-200%)" })
			}
		} else {
			if ($(window).scrollTop() > 25) {
				$("#up-arrow").css({ "opacity": "1", "transform": "translateX(0%)" })
			} else {
				$("#up-arrow").css({ "opacity": "0", "transform": "translateX(200%)" })
			}
		}
	})




	// Enable Plugin Animation On Scroll (AOS)
	AOS.init({
		duration: 1000,
		delay: 250,
		offset: 0
	})




	// $(window).on("load" , function(){
	$("#cover").hide();
	$("#body").css("opacity", "1")
	// })


}); //End ready() ==> End Code JQuery