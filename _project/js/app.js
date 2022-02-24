$(".show-sidebar-btn").click(function (){
    $(".sidebar").animate({
        marginLeft: 0
    });
});

$(".hide-sidebar-btn").click(function (){
    $(".sidebar").animate({
        marginLeft: "-100%"
    });
});

function go(url){
    setTimeout(function (){
        location.href = `${url}`;
    },500)
};

$(function () {
    $('[data-toggle="popover"]').popover()
});

$(".full-screen-btn").click(function (){
    let current = $(this).closest(".card");
    current.toggleClass("full-screen-card");
    if ($(current).hasClass("full-screen-card")){
        $(this).html("<i class='feather-minimize-2'></i>")
        console.log("hello");
    }
    else{
        $(this).html("<i class='feather-maximize-2'></i>")
        console.log("bye")
    }
});

let screenHeight = $(window).height();
let currenMenuHeight = $(`.nav-menu .active`).offset().top;

if (currenMenuHeight > screenHeight*0.8){
    $(".sidebar").animate({
        scrollTop: currenMenuHeight-100
    },1000)
};