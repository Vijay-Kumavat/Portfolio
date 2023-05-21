// ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");
const experienceStartDate = new Date(2021, 01, 01);

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("header__sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
}

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});

function sendMail() {
  let subject = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  if (subject != (null && undefined) && message != (null && undefined)) {
    window.open(
      "mailto:kumavatvijay776@gmail.com?subject=" + subject + "&body=" + message
    );
  }
}

function updateExperience(){
  let year = (new Date().getFullYear() - experienceStartDate.getFullYear());
  let month = new Date().getMonth() + 1;
  var element = document.getElementById('experience');
  if(element != (null && undefined)){
    element.innerHTML = year + '.' + month;
  }
}

this.updateExperience();