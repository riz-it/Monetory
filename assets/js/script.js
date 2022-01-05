window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var home = document.getElementById("home");
  var how = document.getElementById("how");
  var review = document.getElementById("review");
  var features = document.getElementById("features");
  var x = window.matchMedia("(max-width: 768px)");
  if (x.matches) {
    if (this.window.scrollY <= 500) {
      home.classList.add("active");
      features.classList.remove("active");
      how.classList.remove("active");
      review.classList.remove("active");
    } else if (this.window.scrollY <= 1000 && this.window.scrollY >= 500) {
      features.classList.add("active");
      home.classList.remove("active");
      how.classList.remove("active");
      review.classList.remove("active");
    } else if (this.window.scrollY <= 2000 && this.window.scrollY >= 1000) {
      how.classList.add("active");
      features.classList.remove("active");
      home.classList.remove("active");
      review.classList.remove("active");
    } else {
      features.classList.remove("active");
      home.classList.remove("active");
      how.classList.remove("active");
      review.classList.add("active");
    }
  } else {
    if (this.window.scrollY <= 500) {
      home.classList.add("active");
      features.classList.remove("active");
      how.classList.remove("active");
      review.classList.remove("active");
    } else if (this.window.scrollY <= 1000 && this.window.scrollY >= 500) {
      features.classList.add("active");
      home.classList.remove("active");
      how.classList.remove("active");
      review.classList.remove("active");
    } else if (this.window.scrollY <= 3000 && this.window.scrollY >= 1000) {
      how.classList.add("active");
      features.classList.remove("active");
      home.classList.remove("active");
      review.classList.remove("active");
    } else {
      features.classList.remove("active");
      home.classList.remove("active");
      how.classList.remove("active");
      review.classList.add("active");
    }
  }

  nav.classList.toggle("sticky", window.scrollY > 0);
});

const SlidingNavbar = () => {
  const burger = document.querySelector(".nav-burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.1
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
  });
};

SlidingNavbar();

var modal = document.getElementById("tryNow");

var btn = document.getElementById("buttonTry");

var span = document.getElementsByClassName("close-modal")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
