// var heroSection = document.getElementById("hero-section");
// var aboutSection = document.getElementById("about");
// var skillsSection = document.getElementById("skills-section");
// var portofolioSection = document.getElementById("portfolio");
// var experienceSection = document.getElementById("experience");
// var testimonialsSection = document.getElementById("testimonials");
// var statisticsSection = document.getElementById("statistics-section");
// var contactSection = document.getElementById("contact");

// adding scrollspy by js

(function () {
  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll(".nav-links a");
  // console.log(navLinks);

  function handleIntersection(entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        for (var j = 0; j < navLinks.length; j++) {
          if (navLinks[j].getAttribute("href") == "#" + entries[i].target.id) {
            navLinks[j].classList.add("active");
          } else {
            navLinks[j].classList.remove("active");
          }
        }
      }
    }
  }

  const observer = new IntersectionObserver(handleIntersection);

  for (var i = 0; i < sections.length; i++) {
    observer.observe(sections[i]);
  }
})();

// dark and light theme

var htmlTag = document.querySelector("html");
var toggleIcon = document.getElementById("theme-toggle-button");

toggleIcon.addEventListener("click", function () {
  htmlTag.classList.toggle("dark");
});

//nav and tabs part

var allFilterButtons = Array.from(document.querySelectorAll(".portfolio-filter"));

var allFilterCards = Array.from(document.querySelectorAll(".portfolio-item"));

for (var i = 0; i < allFilterButtons.length; i++) {
  allFilterButtons[i].addEventListener("click", function (e) {
    var selectedbutton = e.target.getAttribute("data-filter");
    var clickedButton = e.currentTarget;

    // allFilterButtons[i].classList.remove("active") && allFilterButtons[i].setAttribute(aria - pressed, "false");
    // selectedbutton.classList.add("active") && selectedbutton.setAttribute(aria - pressed, "true");

    //update pressed buton

    for (var m = 0; m < allFilterButtons.length; m++) {
      allFilterButtons[m].classList.remove("active");
      allFilterButtons[m].setAttribute("aria-pressed", "false");
    }

    clickedButton.classList.add("active");
    clickedButton.setAttribute("aria-pressed", "true");

    //filter cards

    for (var j = 0; j < allFilterCards.length; j++) {
      var cardCategory = allFilterCards[j].getAttribute("data-category");

      if (selectedbutton === "all" || cardCategory === selectedbutton) {
        allFilterCards[j].classList.remove("hidden");
      } else {
        allFilterCards[j].classList.add("hidden");
      }

      // } else if (selectedbutton === cardCategroy) {
      //   if (allFilterCards[j] !== "web") {
      //     allFilterCards[j].classList.add("hidden");
      //     console.log(allFilterCards[j].classList);
      //   }
      // } else if (selectedbutton === cardCategroy) {
      //   if (allFilterCards[j] !== "design") allFilterCards[j].classList.add("hidden");
      // } else if (selectedbutton === cardCategroy) {
      // } else if (selectedbutton === "app") {
      //   if (allFilterCards[j] !== cardCategroy) allFilterCards[j].classList.add("hidden");
      // } else if (selectedbutton === "ecommerce") {
      // }
    }
  });
}

//caresoul control

var previousButton = document.querySelector("#prev-testimonial");
var nextButton = document.querySelector("#next-testimonial");
var allCardsList = Array.from(document.querySelectorAll(".testimonial-card"));
var caresoulWrapper = document.querySelector("#testimonials-carousel");
var currentIndex = 0;
var maximumIndex = allCardsList.length - 3;

if (nextButton) {
  nextButton.addEventListener("click", moveNext);
}
if (previousButton) {
  previousButton.addEventListener("click", movePrevious);
}

function moveNext() {
  currentIndex++;
  if (currentIndex > maximumIndex) {
    currentIndex = 0;
  }
  displayCards();
}
function movePrevious() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = maximumIndex;
  }
  displayCards();
}

// for (let card in allCardsList) {
//   currentIndex = allCardsList.indexOf(card);
//   console.log(currentIndex);
// }

function displayCards() {
  caresoulWrapper.style = `transform: translateX(calc(33.333% * ${currentIndex}))`;
}

//setting icon

var settingIcon = document.querySelector("#settings-toggle");
var closeSettingIcon = document.querySelector("#close-settings");
var sideBarController = document.querySelector("#settings-sidebar");
var bodyElement = document.querySelector("body");
var fontFamilybuttons = Array.from(document.querySelectorAll(".font-option"));

// for (var i = 0; i < fontFamilybuttons.length; i++) {
//   console.log(fontFamilybuttons[i].getAttribute("data-font"));
// }

closeSettingIcon.addEventListener("click", closeSideBar);

settingIcon.addEventListener("click", closeSideBar);

function closeSideBar() {
  sideBarController.classList.toggle("translate-x-full");
}

for (var i = 0; i < fontFamilybuttons.length; i++) {
  fontFamilybuttons[i].addEventListener("click", function (e) {
    removeFont();
    var selectedFont = e.currentTarget.getAttribute("data-font");
    bodyElement.classList.add("font-" + selectedFont);
  });
}

function removeFont() {
  for (var i = 0; i < fontFamilybuttons.length; i++) {
    bodyElement.classList.remove("font-" + fontFamilybuttons[i].getAttribute("data-font"));
  }
}

//adding themes color

var themeColor = [
  {
    id: 1,
    name: "Purple",
    primaryColor: "#6366f1",
    secondaryColor: "#8b5cf6",
  },
  {
    id: 2,
    name: "green",
    primaryColor: "#10b981",
    secondaryColor: "#059669",
  },
  {
    id: 3,
    name: "blue",
    primaryColor: "#0284c7",
    secondaryColor: "#06b6d4",
  },
  {
    id: 4,
    name: "orange",
    primaryColor: "#f43f5e",
    secondaryColor: "#fb923c",
  },
  {
    id: 5,
    name: "yellow",
    primaryColor: "#f59e0b",
    secondaryColor: "#d97706",
  },
];

var themeGrid = document.querySelector("#theme-colors-grid");
var themeButton = document.querySelector(".chooseTheme");

var box = "";

for (var i = 0; i < themeColor.length; i++) {
  box += `<button style="background: linear-gradient(135deg, ${themeColor[i].primaryColor}, ${themeColor[i].secondaryColor});" class="chooseTheme  w-10 h-10 rounded-full transition-all" data-primary="${themeColor[i].primaryColor}" data-secondary="${themeColor[i].secondaryColor}"></button>`;
}
themeGrid.innerHTML = box;
var allButtons = document.querySelectorAll(".chooseTheme");

themeGrid.addEventListener("click", function (e) {
  var primary = e.target.getAttribute("data-primary");
  var secondary = e.target.getAttribute("data-secondary");
  var clickedButton = e.target.closest(".chooseTheme");

  document.documentElement.style.setProperty("--color-primary", primary);
  document.documentElement.style.setProperty("--color-secondary", secondary);

  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove("active");
  }
  if (clickedButton) clickedButton.classList.add("active");
});

//rest button
var resetButton = document.querySelector("#reset-settings");
resetButton.addEventListener("click", function (e) {
  var clickedButton = e.target.closest(".chooseTheme");
  removeFont();
  bodyElement.classList.add("font-tajawal");

  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove("active");
  }

  document.documentElement.style.setProperty("--color-primary", "#6366f1");
  document.documentElement.style.setProperty("--color-secondary", "#8b5cf6");
  closeSideBar();
});

// to the top button
var toTheTopButton = document.querySelector("#scroll-to-top");
// var scrollPoint = window.innerHeight();

window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight) {
    toTheTopButton.classList.remove("opacity-0", "invisible");
  } else {
    toTheTopButton.classList.add("opacity-0", "invisible");
  }
});

toTheTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
