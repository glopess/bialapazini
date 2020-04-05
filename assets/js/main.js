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


$('.carousel').carousel({
    interval: 7000
  })

function changeCss() {
    var navElement = document.getElementById("redesSociais");
    this.scrollY > 700 ? navElement.style.opacity = .2 : navElement.style.opacity = 1;
    this.scrollY > 700 ? navElement.style.right = '-21px' : navElement.style.right = '0';
}
window.addEventListener("scroll", changeCss, false);


var beneficiosCards = document.getElementById("beneficios-cards");
var cerebro = document.getElementById("cerebro");
var coracao = document.getElementById("coracao");
var slideIn = $(".slide-in");

function openBeneficiosPessoais() {
    $(".pessoais").css("display", "table-cell");
    $(".profissionais").css("display", "none");
}

function openBeneficiosProfissionais() {
    $(".profissionais").css("display", "table-cell");
    $(".pessoais").css("display", "none");
}

function removeClassShow() {
    $(".slide-in").removeClass('show');
}

function openBox() {
    beneficiosCards.style.display = "unset";
    beneficiosCards.style.opacity = "1";
    setTimeout(function () {
        $("#coracao").remove();
        $("#cerebro").remove();
    }, 1500)

}

$('#coracao').click(function () {
    removeClassShow();
    openBeneficiosPessoais();
    openBox();

});

$('#cerebro').click(function () {
    removeClassShow();
    openBeneficiosProfissionais();
    openBox();
});


function openLink(link) {
    window.open(link, '_blank');
}