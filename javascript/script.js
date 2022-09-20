let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


function myFunction() {
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
    $('html, body').animate({ scrollTop: 0 }, '300');
});

// SLIDER
var swiper = new Swiper(".food-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});



//full meal
let fp1 = document.querySelector('.fp');
let prev1 = fp1.querySelector('.prev');

document.querySelectorAll('.food1 .slide1').forEach(food => {
    food.onclick = () => {
        fp1.style.display = 'flex';
        let name = food.getAttribute('data-name');
        prev1.forEach(preveiw => {
            let target = preveiw.getAttribute('data-target');
            if (name == target) {
                preveiw.classList.add('active');
            }
        });
    };

});

fp1.querySelector('.fmeal').onclick = () => {
    fp1.style.display = 'none';
    prev1.forEach(close => {
        close.classList.remove('active');
    });
};
// let fp1 = document.querySelector('.fp');
// let prev1 = fp1.querySelector('.prev');

// document.querySelectorAll('.food1 .slide1').forEach(food =>{
//   food.onclick = () =>{
//     fp1.style.display = 'flex';
//       let name = food.getAttribute('data-name');
//       prev1.forEach(preveiw =>{
//         let target = preveiw.getAttribute('data-target');
//         if(name == target){
//             preveiw.classList.add('active');
//         }
//       });
//   };
// });

// fp1.querySelector('.fmeal').onclick = () =>{
//   fp1.style.display = 'none';
//   prev1.forEach(close =>{
//       close.classList.remove('active');
//   });
// };
//end of full meal


//snacks
let fp2 = document.querySelector('.fp2');
let prev2 = fp2.querySelectorAll('.prev2');

document.querySelectorAll('.food2 .slide2').forEach(food2 => {
    food2.onclick = () => {
        fp2.style.display = 'flex';
        let name = food2.getAttribute('data-name');
        prev2.forEach(preveiw => {
            let target = preveiw.getAttribute('data-target');
            if (name == target) {
                preveiw.classList.add('active');
            }
        });
    };
});
fp2.querySelector('.smeal').onclick = () => {
    fp2.style.display = 'none';
    prev2.forEach(close => {
        close.classList.remove('active');
    });
};
// end of snacks


//dessert
let fp3 = document.querySelector('.fp3');
let prev3 = fp3.querySelectorAll('.prev3');

document.querySelectorAll('.food3 .slide3').forEach(food3 => {
    food3.onclick = () => {
        fp3.style.display = 'flex';
        let name = food3.getAttribute('data-name');
        prev3.forEach(preveiw => {
            let target = preveiw.getAttribute('data-target');
            if (name == target) {
                preveiw.classList.add('active');
            }
        });
    };
});
fp3.querySelector('.dmeal').onclick = () => {
    fp3.style.display = 'none';
    prev3.forEach(close => {
        close.classList.remove('active');
    });
};
// end of dessert

//beverages
let fp4 = document.querySelector('.fp4');
let prev4 = fp4.querySelectorAll('.prev4');

document.querySelectorAll('.food4 .slide4').forEach(food4 => {
    food4.onclick = () => {
        fp4.style.display = 'flex';
        let name = food4.getAttribute('data-name');
        prev4.forEach(preveiw => {
            let target = preveiw.getAttribute('data-target');
            if (name == target) {
                preveiw.classList.add('active');
            }
        });
    };
});
fp4.querySelector('.bmeal').onclick = () => {
    fp4.style.display = 'none';
    prev4.forEach(close => {
        close.classList.remove('active');
    });
};
// end of beverages



// REVIEW













// INPUT ROW TO ORDERS
function tabRow() {
    // plus += 1;
    let tbbb = document.querySelector("#tab");
    let orderno = document.querySelector("#orderno");
    let ptype = document.querySelector("#type");
    let pname = document.querySelector("#pname");
    let date = document.querySelector("#date");

    let ono = orderno.value;
    let pt = ptype.options[ptype.selectedIndex].text;
    let pn = pname.value;
    let d = date.value;

    let template =
        `<tr>
        <td>${ono}</td>
        <td>${pt}</td>
        <td>${pn}</td>
        <td>${d}</td>
        <td><span class="trash"><i class="las la-trash"  onclick="delRow(this)"></i></span></td>
        </tr>`;

    tbbb.innerHTML += template;
}

function delRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.remove(row);
}

function readMore() {
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
}


// REVIEW





$(function() {
    $(".default_option").click(function() {
        $(".dropdown ul").slideToggle('active');
    });
    $(".fas fa-solid fa-magnifying-glass").click(function() {
        $(".dropdown ul").toggleClass("active");
    });

    $(".dropdown ul li").click(function() {
        var text = $(this).text();
        $(".default_option").text(text);
        $(".dropdown ul").removeClass("active");
    });


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

    $("#profile1").click(function() {
        $('#description1').slideToggle();
    });
    $("#profile2").click(function() {
        $('#description2').slideToggle();
    });
    $("#profile3").click(function() {
        $('#description3').slideToggle();
    });

    function slid() {
        if ($(".images1").data('clicked', true)) {
            $(".images1").click(function() {
                $(".food1").slideToggle("slow");
                $(".food2").hide();
                $(".food3").hide();
                $(".food4").hide();
            })
        }
        if ($(".images2").data('clicked', true)) {
            $(".images2").click(function() {
                $(".food1").hide();
                $(".food2").slideToggle("slow");
                $(".food3").hide();
                $(".food4").hide();
            })
        }
        if ($(".images3").data('clicked', true)) {
            $(".images3").click(function() {
                $(".food1").hide();
                $(".food2").hide();
                $(".food3").slideToggle("slow");
                $(".food4").hide();
            })
        }
        if ($(".images4").data('clicked', true)) {
            $(".images4").click(function() {
                $(".food1").hide();
                $(".food2").hide();
                $(".food3").hide();
                $(".food4").slideToggle("slow");
            })
        }
    }

    slid();


    $(".option").click(function() {
        $(".dropdown ul").toggleClass("display");
    });
    $(".dropdown ul li").click(function() {
        var text = $(this).text();
        $(".option").text(text);
        $(".dropdown ul").removeClass("display");


    })

})