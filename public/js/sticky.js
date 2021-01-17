// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
  // myFunction2();
};

// Get the navbar and the cart
var navbar = document.getElementById("navbar");
// var cart = document.getElementById("cart");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// var stickyCart = cart.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// function myFunction3() {
//   if (window.pageYOffset >= sticky) {
//     cart.classList.add("stickyCart");
//   } else {
//     cart.classList.remove("stickyCart");
//   }
// }
