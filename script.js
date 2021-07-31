/* hamburger menu */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

// /* first attempt: getting form values */
// document
//   .querySelector('form.form-inline')
//   .addEventListener('submit', function (e) {
//     e.preventDefault();
//     var formInput = document.querySelectorAll('#fname, #lname, #email, #phone');
//     console.log(formInput.value);
//   });

// 2nd attempt:
// iT WORKS!
// select the form element
// when you click the submit button, the stuff inside function happens
document.querySelector('form').addEventListener('submit', function (event) {
  // keep page from reloading
  event.preventDefault();

  // selects all the values and saves their values in vars
  var a = document.getElementById('fname').value;
  var b = document.getElementById('lname').value;
  var c = document.getElementById('email').value;
  var d = document.getElementById('phone').value;

  // prints the vars w/ the values
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);

  // why return false?
  return false;
});
