function validation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var text;
  var fName = /^[a-zA-Z]+ [a-zA-Z]+$/;

  error_message.style.padding = "10px";

  if(!fName.test(name)) {
      text = "Invalid Full Name given.";
      error_message.innerHTML = text;
      return false;
  }

  if(email.indexOf("@") == -1 || email.length < 6) {
      text = "Invalid Email given.";
      error_message.innerHTML = text;
      return false;
    }

  if(isNaN(phone) || phone.length != 10) {
      text = "Invalid Phone Number given.";
      error_message.innerHTML = text;
      return false;
    }

  if(city.length < 4) {
      text = "Invalid city given.";
      error_message.innerHTML = text;
      return false;
  }
  if(state.length < 4) {
      text = "Invalid state given.";
      error_message.innerHTML = text;
      return false;
  }
  if(country.length < 4) {
      text = "Invalid country given.";
      error_message.innerHTML = text;
      return false;
  }

  if(message.length <= 10) {
      text = "Write a Message.";
      error_message.innerHTML = text;
      return false;
    }


    error_message.style.background = "#39c045";
    text = "Form Submitted Successfully!";
    error_message.innerHTML = text;
    return true;
  }

const navSlide = () => {
    const navbar = document.querySelector('.navbar');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li');

    navbar.addEventListener('click', () => {
      //Toggle Nav
      nav.classList.toggle('nav-active');

      //Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
      //navbar animation
      navbar.classList.toggle('toggle');

    });
}

navSlide();
