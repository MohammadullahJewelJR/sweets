let menu = document.querySelector(".menu");
document.querySelector(".close-btn").addEventListener("click", ()=>{
    menu.style.right = "-100%";
})
document.querySelector(".open-btn").addEventListener("click", ()=>{
    menu.style.right = "0px";
});

var nav = document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    nav.classList.toggle("active", scrollY >= 300);
});

// =================== JS FOR RESPONSIVE MENU
let dropdown = document.querySelector("#dropdown");
dropdown.addEventListener("click", ()=> {
    document.querySelector(".dropdown-menu").classList.toggle("active");
});

// ====================== Active Menu 
var navlink = document.querySelectorAll(".activeBtn");
for(let i = 0; i<navlink.length; i++){
    navlink[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
}
//============================ CAROUSEL
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items : 2,
        autoPlay:true,
        loop:true,
        dots:true,
        responsive: true,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false, 
        navigation : false,
        // navigationText : ["<i class='fas fa-chevron-left'> "," <i class='fas fa-chevron-right'>"],
        rewindNav : true,
        scrollPerPage : true,
    });
})






// ==================== JS FOR COMMING SOON SECTION 
var day = document.querySelector(".day .num");
var hour = document.querySelector(".hour .num");
var min = document.querySelector(".min .num");
var sec = document.querySelector(".sec .num");

var launchTime = new Date('Feb 21, 2022 11:30:00').getTime();
var x = setInterval(()=>{
    var presentTime = new Date().getTime();

    var duration = launchTime - presentTime;

    var days = Math.floor(duration / (1000 * 60 * 60 * 24));
    var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((duration % (1000 * 60)) / 1000);


    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
    
    if(days < 10) {
        days.innerHTML = "0" + days;
    }
    if(hours < 10) {
        hour.innerHTML = "0" + hours;
    }
    if(minutes < 10) {
        min.innerHTML = "0" + minutes;
    }
    if(seconds < 10) {
        sec.innerHTML = "0" + seconds;
    }
    
    if(duration < 0) {
        clearInterval(x);
        day.innerHTML = "00";
        hour.innerHTML = "00";
        min.innerHTML = "00";
        sec.innerHTML = "00";
    }

},1000)

