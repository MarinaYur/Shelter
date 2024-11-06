import { createPopup, createUnderlay } from "./popup.js";
import { petsData } from "./pets-data.js";

console.log("Выполнены все пункты задания. Оценка 110/110");

let currentPet = 0;
let isEnabled = true;
let side = "";
let prevSide = "";
let prevPetsArray = [];
let activePets = [];
let elemsCount = 3;

let shuffleArray = (array) => {
  array.sort(() => Math.random() - 0.5);
};

// open/close mobile-menu
const openCloseBurgerMenu = () => {
  let burger = document.querySelector(".humburger");
  let navigation = document.querySelector(".nav");
  let shadow = document.querySelector(".shadow");
  let body = document.querySelector("body");
  let burgerLines = document.querySelectorAll(".humburger__line");
  let listLinks = document.querySelectorAll(".nav__list-link");

  body.addEventListener("click", (e) => {

    if (e.target === burger || Array.from(burgerLines).includes(e.target)) {
      burger.classList.toggle("burger_reverse");
      shadow.classList.toggle("shadow_on");
      body.style.overflow = "hidden";

      if (navigation.classList.contains("slide-in")) {
        navigation.classList.remove("slide-in");
        navigation.classList.add("slide-out");
        body.style.overflow = "visible";
      } else {
        navigation.classList.remove("slide-out");
        navigation.classList.add("slide-in");
      }
    }

    if (Array.from(listLinks).includes(e.target) || e.target === shadow) {
      burger.classList.remove("burger_reverse");
      shadow.classList.remove("shadow_on");
      navigation.classList.remove("slide-in");
      navigation.classList.add("slide-out");
      body.style.overflow = "visible";
    }
  });
};

const createCards = function () {
  let activePetsLength = activePets.length;
  let freePets = Array(activePetsLength).concat(
    petsData.filter((el) => !activePets.includes(el))
  );
  let petsCounter = 0;
  let sliderContainer = document.querySelector(".slider_container");
  sliderContainer.innerHTML = "";
  for (let i = 1; i <= 3; i++) {
    let block = document.createElement("div");
    block.className = `block block${i}`;
    if (i === 1) {
      block.className += " active";
    }
    sliderContainer.append(block);
    for (let j = 1; j <= elemsCount; j++) {
      let pet = document.createElement("div");
      let petImage = document.createElement("div");
      let petName = document.createElement("p");
      let petButton = document.createElement("button");
      if (
        petsCounter >= 0 &&
        petsCounter < activePetsLength &&
        activePetsLength !== 0
      ) {
        petImage.style.backgroundImage = `url(${activePets[petsCounter].img})`;
        petName.innerHTML = activePets[petsCounter].name;
      } else if (petsCounter !== 8) {
        if (activePets.length < elemsCount) {
          activePets.push(freePets[petsCounter]);
        }
        petImage.style.backgroundImage = `url(${freePets[petsCounter].img})`;
        petName.innerHTML = freePets[petsCounter].name;
      } else if (elemsCount === 3) {
        petImage.style.backgroundImage = ``;
        petName.innerHTML = "";
      }
      petButton.innerHTML = "Learn more";

      petName.className = "pet__name";
      petButton.className = "pet__button button button--bordered";
      petImage.className = `pet__image`;
      pet.className = `pet`;
      block.append(pet);
      pet.append(petImage);
      pet.append(petName);
      pet.append(petButton);
      petsCounter++;
    }
  }
  window.addEventListener("resize", updateScreenWidth);
};

function changeCurrentPet(n) {
  let pets = document.querySelectorAll(".block");
  if (side === prevSide || prevSide === "") {
    prevPetsArray = [...activePets];
    shuffleArray(petsData);
    activePets = petsData
      .filter((el) => !prevPetsArray.includes(el))
      .slice(0, elemsCount);
  }
  if (side !== prevSide && prevSide !== "") {
    let interim = [...activePets];
    activePets = [...prevPetsArray];
    prevPetsArray = [...interim];
  }
  prevSide = side;
  currentPet = (n + pets.length) % pets.length;
  Array.from(pets[currentPet].children).forEach((el, ind) => {
    el.children[0].style.backgroundImage = `url(${activePets[ind].img})`;
    el.children[1].innerHTML = activePets[ind].name;
  });
}

function hidePet(direction) {
  let pets = document.querySelectorAll(".block");
  isEnabled = false;
  pets[currentPet].classList.add(direction);
  pets[currentPet].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
}

function showPet(direction) {
  let pets = document.querySelectorAll(".slider__pets .block");
  pets[currentPet].classList.add("next", direction);
  pets[currentPet].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;
  });
}

function nextPet(n) {
  hidePet("to-left");
  changeCurrentPet(n + 1);
  showPet("from-right");
}

function previousPet(n) {
  hidePet("to-right");
  changeCurrentPet(n - 1);
  showPet("from-left"), 10000;
}

let rightArrow = document.querySelector(".slider__right-arrow");
rightArrow?.addEventListener("click", (e) => {
  side = "right";
  if (isEnabled) {
    nextPet(currentPet);
  }
});

let leftArrow = document.querySelector(".slider__left-arrow");

leftArrow?.addEventListener("click", () => {
  side = "left";
  if (isEnabled) {
    previousPet(currentPet);
  }
});

let screenWidth = () => {
  const width = window.innerWidth;
  if (width > 1001) {
    elemsCount = 3;
  } else if (width <= 1000 && width > 550) {
    elemsCount = 2;
  } else if (width <= 550) {
    elemsCount = 1;
  }
  createCards();
  createPopup(petsData);

};

let updateScreenWidth = () => {
  const width = window.innerWidth;
  screenWidth();
  side = "";
  prevSide = "";
  prevPetsArray = [];
  currentPet = 0;
};

window.onload = function () {
  createUnderlay();
  shuffleArray(petsData);
  screenWidth();
  activePets = petsData.slice(0, elemsCount);
  openCloseBurgerMenu();
};
