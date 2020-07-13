/*=======================================================
                    navbar section
=======================================================*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 200) {
            $("header").removeClass("top-nav");
            $(".nav-item-dropdown").removeClass("dropdown-color");
        } else {
            $("header").addClass("top-nav");
            $(".nav-item-dropdown").addClass("dropdown-color");
            // $("header").css("height", "90px");
        }
    });
});

$(window).resize(function () {
    if ($(window).width() < 993) {
        $("header").addClass("top-nav");
        $(".nav-item-dropdown").removeClass("dropdown-color");
    }
});

//close mobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".btn-toggle").click();
    });
});

function btnToggle() {
    var x = document.getElementById("nav-toggle");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementById("dropdown-toggle");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        autoplayHoverPause: true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        rewind: true,
        margin: 0,
        dots: true
    });
});

/*=======================================================
                    product section
=======================================================*/
// $(function () {
//     $(".product-info-box .product-name-icon i").on("click touch", function () {
//         $(this).find('i').toggle('#select-icon #selected-icon');
//     });
// });

// $(function () {
//     $(".product-info-box .product-name-icon i").on("click touch", function () {
//         var selectIcon = document.getElementById("select-icon");
//         var selectedIcon = document.getElementById("selected-icon");
//         if (selectedIcon.style.display === "none") {
//             selectedIcon.display = "block";
//             selectIcon.style.display = "none";
//         } else {
//             selectedIcon.style.display = "none";
//             selectIcon.style.display = "block";
//         }
//     });
// });

function selectIcon() {
    var selectIcon = document.getElementById("select-icon");
    var selectedIcon = document.getElementById("selected-icon");
    selectIcon.style.display = "none";
    selectedIcon.style.display = "block";
}

function selectedIcon() {
    var selectIcon = document.getElementById("select-icon");
    var selectedIcon = document.getElementById("selected-icon");
    selectedIcon.style.display = "none";
    selectIcon.style.display = "block";
}

// function selectIcon() {
//     var selectIcon = document.getElementById("select-icon");
//     var selectedIcon = document.getElementById("selected-icon");
//     if (selectedIcon.style.display === "none") {
//         selectedIcon.display = "block";
//         selectIcon.style.display = "none";
//     } else {
//         selectedIcon.style.display = "none";
//         selectIcon.style.display = "block";
//     }
// }


$('.product-name-icon').on('click', function () {
    $('i', this).toggleClass('far fas');
});

function searchBar() {
    var x = document.getElementById("search");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}