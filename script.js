$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});


/*console.log("hello");
alert ("hi!");

document.getElementById("x").innerHTML = "Text here!";
document.getElementById(x).play();

console.log (2+5);
console.log (Math.random());


if (4>5) {
	console.log("it is true");
}

else {
	console.log("it is false");
}


function printApples(unknown) {
	while (unknown<15){
		console.log ("I have an apple")
		unknown+=1;

	}
}

printApples(10); */