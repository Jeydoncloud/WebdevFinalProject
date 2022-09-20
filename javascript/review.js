let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


function myFunction(){
  $("#myDropdown").slideToggle();
}


// BACK TO TOP
var btn = $('#btp');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});





// REVIEW
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 600,
    draggable: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        }
    ]
});

// SHOW ANSWER
function showAns(){
  $("#answer").slideToggle();
}
function showAns1(){
  $("#answer1").slideToggle();
}
function showAns2(){
  $("#answer2").slideToggle();
}
function showAns3(){
  $("#answer3").slideToggle();
}
function showAns4(){
  $("#answer4").slideToggle();
}
function showAns5(){
  $("#answer5").slideToggle();
}