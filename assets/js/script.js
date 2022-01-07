window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  let home = document.getElementById("home");
  let how = document.getElementById("how");
  let review = document.getElementById("review");
  let features = document.getElementById("features");
  let phone = window.matchMedia("(min-width: 0px) and (max-width: 575px)");
  let landscapePhone = window.matchMedia(
    "(max-width: 787px) and (min-width: 576px)"
  );
  let tablet = window.matchMedia("(max-width: 991px) and (min-width: 788px)");
  let dekstop = window.matchMedia("(min-width: 1000px)");
  if (phone.matches) {
    if (this.window.scrollY <= 400) {
      home.classList.add("active");
      features.classList.remove("active");
      how.classList.remove("active");
      review.classList.remove("active");
    } else if (this.window.scrollY <= 800 && this.window.scrollY > 400) {
      features.classList.add("active");
      home.classList.remove("active");
      how.classList.remove("active");
      review.classList.remove("active");
    } else if (this.window.scrollY <= 1600 && this.window.scrollY > 800) {
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

  if (landscapePhone.matches) {
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
  }

  if (tablet.matches) {
    if (this.window.scrollY <= 500) {
      home.classList.add("active");
      features.classList.remove("active");
      how.classList.remove("active");
      review.classList.remove("active");
    } else if (this.window.scrollY <= 1600 && this.window.scrollY >= 500) {
      features.classList.add("active");
      home.classList.remove("active");
      how.classList.remove("active");
      review.classList.remove("active");
    } else if (this.window.scrollY <= 3000 && this.window.scrollY >= 1600) {
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

  if (dekstop.matches) {
    if (this.window.scrollY <= 500) {
      home.classList.add("active");
      features.classList.remove("active");
      how.classList.remove("active");
      review.classList.remove("active");
    } else if (this.window.scrollY <= 1400 && this.window.scrollY >= 500) {
      features.classList.add("active");
      home.classList.remove("active");
      how.classList.remove("active");
      review.classList.remove("active");
    } else if (this.window.scrollY <= 2600 && this.window.scrollY >= 1400) {
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

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.1
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

let indexCoursel = 0;
showSlides(indexCoursel);

function plusSlides(n) {
  showSlides((indexCoursel += n));
}

function showSlides(n) {
  let i;
  let pageCoursel = document.getElementsByClassName("coursel-content");
  if (n > pageCoursel.length) {
    indexCoursel = 1;
  } else if (n < 1) {
    indexCoursel = pageCoursel.length;
  }

  for (i = 0; i < pageCoursel.length; i++) {
    pageCoursel[i].style.display = "none";
    // console.log(pageCoursel[i]);
  }
  pageCoursel[indexCoursel - 1].style.display = "block";
}

SlidingNavbar();

let modal = document.getElementById("tryNow");

let btn = document.getElementById("buttonTry");

let span = document.getElementsByClassName("close-modal")[0];

btn.onclick = function () {
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
};

span.onclick = function () {
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
  }
};
