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

function myFunction() {
    $("#myDropdown").slideToggle();
}



$(function() {

    //   Headeeeer
    $(".option").click(function() {
        $(".dropdown ul").toggleClass("display");
    });
    $(".dropdown ul li").click(function() {
        var text = $(this).text();
        $(".option").text(text);
        $(".dropdown ul").removeClass("display");
    });

})

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