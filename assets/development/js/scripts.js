

$('.inactive').click(function(){
	return false;
});

$(window).load(function() {

	setTimeout(function() {
		$('.js .loader').fadeOut(500);
	}, 100);

	setTimeout(function() {
		$('.js header').fadeIn(500);
	}, 1100);

	setTimeout(function() {
		$('.js .main-content').fadeIn(500);
		$('.js footer').fadeIn(500);
	}, 1600);

});

// Add current year to .current-year
var currentYear = (new Date).getFullYear();
$('.current-year').text(currentYear)

// Do X ESC
$(document).keyup(function(e) {

	if (e.keyCode == 27) {
		// Guff
	}

});


/* Smooth scroll */
$(document).ready(function(){function e(e){return e.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")}function r(e){for(var t=0,n=arguments.length;t<n;t++){var r=arguments[t],i=$(r);if(i.scrollTop()>0){return r}else{i.scrollTop(1);var s=i.scrollTop()>0;i.scrollTop(0);if(s){return r}}}return[]}var t=e(location.pathname);var n=r("html","body");$("a[href*=#]").each(function(){var r=e(this.pathname)||t;if(t==r&&(location.hostname==this.hostname||!this.hostname)&&this.hash.replace(/#/,"")){var i=$(this.hash),s=this.hash;if(s){var o=i.offset().top;$(this).click(function(e){e.preventDefault();$(n).animate({scrollTop:o},400,function(){location.hash=s})})}}})})



