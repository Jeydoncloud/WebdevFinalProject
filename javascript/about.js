let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};





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
    $('html, body').animate({ scrollTop: 0 }, '300');
});

function myFunction() {
    $("#myDropdown").slideToggle();
}



$(function() {

    // ABOUT READ MORE BUTTON

    $("#toggle").click(function() {
        var elem = $("#toggle").text();
        if (elem == "Read More") {
            //Stuff to do when btn is in the read more state
            $("#toggle").text("Read Less");
            $("#text").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#toggle").text("Read More");
            $("#text").slideUp();
        }
    });
    $("#toggle1").click(function() {
        var elem = $("#toggle1").text();
        if (elem == "Read More") {
            //Stuff to do when btn is in the read more state
            $("#toggle1").text("Read Less");
            $(".text").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#toggle1").text("Read More");
            $(".text").slideUp();
        }

    });

    //   contact with the teeam profile
    $("#profile1").click(function() {
        $('#description1').slideToggle();
    });
    $("#profile2").click(function() {
        $('#description2').slideToggle();
    });
    $("#profile3").click(function() {
        $('#description3').slideToggle();
    });


    //   Headeeeer
    $(".option").click(function() {
        $(".dropdown ul").toggleClass("display");
    });
    $(".dropdown ul li").click(function() {
        var text = $(this).text();
        $(".option").text(text);
        $(".dropdown ul").removeClass("display");
    })


    $(".send").click(function() {
        alert("Message has been sent!");
    })
})