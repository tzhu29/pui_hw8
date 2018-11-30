//data aos script to animate both index and about pages
function initAOS() {
  AOS.init({
    duration: 1200,
  });
}

/*sidebar scrolling animation*/

$(window).on("load", function() {
    var offset = $("#sidebar").offset();
    var scrollDelay = 0
    $(window).scroll(function() {
        if ($(window).scrollTop() > offset.top) {
            $("#sidebar").stop().animate({
                marginTop: $(window).scrollTop() - offset.top
            }, scrollDelay, "linear");
        } else {
            $("#sidebar").stop().animate({
                marginTop: 0
            }, scrollDelay, "linear");
        };
    });
});

/* script for cycling thru images in carousel, from W3Schools
https://www.w3schools.com/w3css/w3css_slideshow.asp */
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
