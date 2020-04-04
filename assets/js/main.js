$(function () {
    var $window = $(window); //You forgot this line in the above example
    $('section[data-type="background"]').each(function () {
        var $bgobj = $(this); // assigning the object
        $(window).scroll(function () {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // Put together our final background position
            var coords = '50% ' + yPos + 'px';
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});


function changeCss() {
    var bodyElement = document.querySelector("body");
    var navElement = document.getElementById("redesSociais");
    this.scrollY > 700 ? navElement.style.opacity = .2 : navElement.style.opacity = 1;
    this.scrollY > 700 ? navElement.style.right = '-21px' : navElement.style.right = '0';
}
window.addEventListener("scroll", changeCss, false);


var beneficiosCards = document.getElementById("beneficios-cards");
var cerebro = document.getElementById("cerebro");
var coracao = document.getElementById("coracao");
var imagens = document.getElementById("imagens");

function openBeneficiosPessoais() {
    $(".pessoais").css("display", "table-cell");
    $(".profissionais").css("display", "none");
    openBoxEffects();
}
function openBeneficiosProfissionais() {
    $(".profissionais").css("display", "table-cell");
    $(".pessoais").css("display", "none");
    openBoxEffects();
}
// function moveImages() {
//     cerebro.style.transform = `translateX(-100%)`;
//     coracao.style.transform = `translateX(100%)`;
// }
function openBoxEffects() {
    moveImages();
    beneficiosCards.style.visibility = "visible";
    beneficiosCards.style.opacity = "1"; ""
    setTimeout(function () {
        imagens.style.visibility = "hidden";
    }, 800);
}

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .click(function(event) {
    if (
        
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
        debugger
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();

        var scrollTop = target.offset().top - $('.sticky-top').height();

        $('html, body').animate({
          scrollTop: scrollTop
        }, 1000)
      }
    }
});