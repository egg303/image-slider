var sliderInt = 1;
var sliderNext = 2;
$(document).ready(function(){
	$("#slider").find("img#1").show();
	$("#slider").css({"box-shadow":"0 0 60px "+ $("#slider > img#1").data("ambi") + ", 0 0 20px #aaf"});
	startSlider();

	$(".left").on("click", function(event){
		event.preventDefault();
		var newSlide = sliderInt-1;
		showSlide(newSlide);
	});

	$(".right").on("click", function(event){
		event.preventDefault();
		var newSlide = sliderInt+1;
		showSlide(newSlide);
	});

	$("#slider").find("img").hover(function(){stopLoop()},function(){startSlider()});
});

function  startSlider() {
	count = $("#slider > img").size();

	loop = setInterval(function(){

		if(sliderNext>count){
			sliderNext=1;
			sliderInt=1;
		}

		$("#slider > img").fadeOut(300);
		$("#slider").css({"box-shadow":"0 0 80px #999"});
		$("#slider > img#" + sliderNext).fadeIn(300);
		$("#slider").css({"box-shadow":"0 0 60px "+ $("#slider > img#" + sliderNext).data("ambi") + ", 0 0 20px #aaf"});
		sliderInt=sliderNext;
		sliderNext=sliderNext+1;
	}, 3000);
}

function stopLoop(){
	window.clearInterval(loop);
}

function showSlide(id){
	stopLoop();
	if(id > count){
		id=1;
	} else if(id<1){
		id=count;
	}

	$("#slider > img").fadeOut(300);
	$("#slider").css({"box-shadow":"0 0 80px #999"});
	$("#slider > img#" + id).fadeIn(300);
	$("#slider").css({"box-shadow":"0 0 60px "+ $("#slider > img#" + id).data("ambi") + ", 0 0 20px #aaf"});
	sliderInt=id;
	sliderNext=id+1;
	startSlider();
}

