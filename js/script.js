// ================ Header_part nav active js ======================

// Get the container element
var btnContainer = document.getElementById("header_part");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav_btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// ================ banner part slider ======================
$('.banner_slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
});

// ================ product_slider slider ======================
$('.product_slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerPadding: '60px',
    autoplay: true,
    prevArrow: '<i class=" prev fa-solid fa-angle-left"></i>',
    nextArrow: '<i class=" next fa-solid fa-angle-right"></i>',
  });

// ================flashsall countdown js==============
var countDownDate = new Date("Mar 15, 2024 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "d";
  document.getElementById("hours").innerHTML = hours + "h";
  document.getElementById("minutes").innerHTML = minutes + "m";
  document.getElementById("seconds").innerHTML = seconds + "s";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// ================upcomming countdown js==============
var countDownDate1 = new Date("Mar 8, 2024 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate1 - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days1").innerHTML = days + "d ";
  document.getElementById("hours1").innerHTML = hours + "h ";
  document.getElementById("minutes1").innerHTML = minutes + "m ";
  document.getElementById("seconds1").innerHTML = seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// ================product information page product image silection js==============
var MainImg = document.getElementById("mainimg")
var smlimg = document.getElementsByClassName("smallimages")

smlimg[0].onclick = function(){
  MainImg.src = smlimg[0].src;
}
smlimg[1].onclick = function(){
  MainImg.src = smlimg[1].src;
}
smlimg[2].onclick = function(){
  MainImg.src = smlimg[2].src;
}
smlimg[3].onclick = function(){
  MainImg.src = smlimg[3].src;
}
smlimg[4].onclick = function(){
  MainImg.src = smlimg[4].src;
}
smlimg[5].onclick = function(){
  MainImg.src = smlimg[5].src;
}
smlimg[6].onclick = function(){
  MainImg.src = smlimg[6].src;
}
