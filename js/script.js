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
    autoplay: false,
    pauseOnHover: false,
    prevArrow: '<i class=" prev fa-solid fa-angle-left"></i>',
    nextArrow: '<i class=" next fa-solid fa-angle-right"></i>',
  });

//   var countDownDate = new Date("Feb 27, 2023 00:00:00").getTime();
//   var x = setInterval(function(){
//     var now = new Date().fetTime();
//     var distance = countDownDate - now;

//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     document.getElementById("days").innerHTML = days;
//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minutes").innerHTML = minutes;
//     document.getElementById("seconds").innerHTML = seconds;

//   },1000);

  // Set the date we're counting down to
var countDownDate = new Date("Mar 15, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("hours").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("minutes").innerHTML = minutes + "m " + seconds + "s ";
  document.getElementById("seconds").innerHTML = seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);