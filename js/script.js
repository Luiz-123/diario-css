/*---------- Navbar Link Start ----------*/
$('#navbar a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top,
			menuHeight = $('#navbar').innerHeight();

	console.log(menuHeight);

	$('html, body').animate({
		scrollTop: targetOffset 
	}, 1000);
});
/*---------- Navbar Link End ----------*/


/*---------- Hint Button Start ----------*/
$(document).ready(function() {
    $("[data-toggle='tooltip']").tooltip();
    
    $(".main-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        nextArrow: '<i class="fas fa-angle-right">',
        prevArrow: '<i class="fas fa-angle-left">',
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2.
                }
            }
        ]
    });
});
/*---------- Hint Button End ----------*/



/*---------- Scroll Button Start ----------*/
// pegar botão
var mybutton = document.getElementById("btnScroll");

// quando rolar a página 20px do topo para baixo, o botão será exibido
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// // quando clicar no botão, a página rola para o topo do documento
/*function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}*/


// // jQuery quando clicar no botão, a página rola para o topo do documento
var btn = $("#btnScroll");

btn.click(function() {
    $('html, body').animate({scrollTop:0}, 'slow');
});
/*---------- Scroll Button End ----------*/

