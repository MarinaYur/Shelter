import { openCloseBurgerMenu } from "./burger-menu.js";
import { shuffleArray } from "./shuffle-array.js";
import {
  screenWidth
} from "./for-slider.js";
import { createPopup, createUnderlay } from "./popup.js";
import { petsData } from "./pets-data.js";

console.log("Выполнены все пункты задания. Оценка 110/110");

const createPetsArray = () => {
  for (let i = 0; i < 6; i++) {
    shuffleArray(petsData);
    petsObjsArray.push(...petsData);
  }
};
window.onload = function () {
  createUnderlay();
  createPetsArray();
  createCards();
  openCloseBurgerMenu();

};
let petsCount = {
  desktop: 8,
  tablet: 6,
  mobile: 3,
};
let reloadPage = true;
let pageNumber = document.querySelector(".slider__arrows_number-of-page");
pageNumber.innerHTML = 1;
const totalPetsCount = 48;
let petsObjsArray = [];
let currentPet = 0;
let isEnabled = true;
let elemsPageAmount = petsCount[screenWidth()];
let pageAmount = totalPetsCount / elemsPageAmount;

let rightArrow = document.querySelector(".slider__arrows_right");
let rightArrowToMax = document.querySelector(".slider__arrows_right-to-max");
let leftArrow = document.querySelector(".slider__arrows_left");
let leftArrowTo1 = document.querySelector(".slider__arrows_left-to-1");
let sliderContainer = document.querySelector(".slider_container");

const createCards = function (screenSize) {
  if (!reloadPage) {
    elemsPageAmount = petsCount[screenSize];
    pageAmount = totalPetsCount / elemsPageAmount;
    pageNumber.innerHTML = 1;
    currentPet = 0;
    isEnabled = true;
    sliderContainer.childNodes.forEach(el => el.classList.remove('to-left'));
  }

  let petsObjsArrayCopy = [].concat(...petsObjsArray);
  sliderContainer.innerHTML = "";
  for (let i = 0; i < pageAmount; i++) {
    let page = document.createElement("div");
    page.className = `block`;
    if (i === 0) {
      page.className += " active";
    }
    sliderContainer.append(page);
    let petsForPage = [];
    for (let k = 0; k < petsObjsArrayCopy.length; k++) {
      if (petsForPage.length < elemsPageAmount) {
        if (
          petsObjsArrayCopy[k] !== 0 &&
          !petsForPage.includes(petsObjsArrayCopy[k])
        ) {
          petsForPage.push(petsObjsArrayCopy[k]);
          petsObjsArrayCopy[k] = 0;
        }
      }
    }
    for (let j = 0; j < petsForPage.length; j++) {
      let pet = document.createElement("div");
      let petImage = document.createElement("div");
      let petName = document.createElement("p");
      let petButton = document.createElement("button");
      petImage.style.backgroundImage = `url(${petsForPage[j].img})`;
      petName.innerHTML = petsForPage[j].name;
      petButton.innerHTML = "Learn more";
      petName.className = "pet__name";
      petButton.className = "pet__button button button--bordered";
      petImage.className = `pet__image`;
      pet.className = `pet pet${j + 1}`;
      page.append(pet);
      pet.append(petImage);
      pet.append(petName);
      pet.append(petButton);
    }
  }
  reloadPage = false;
  createPopup(petsData);

};

export const updateScreenWidth = () => {
  const screenSize = screenWidth();
  createCards(screenSize);
  // createPopup(petsData);
  makeLeftArrowsDisabled();
  makeRightArrowsAble();
};

window.addEventListener("resize", updateScreenWidth);

const makeLeftArrowsDisabled = () => {
  toggleClass(leftArrow, true, "disabled", "slider__arrow");
  toggleClass(leftArrowTo1, true, "disabled", "slider__arrow");
}

const makeRightArrowsDisabled = () => {
  toggleClass(rightArrow, true, "disabled", "slider__arrow");
  toggleClass(rightArrowToMax, true, "disabled", "slider__arrow");
}

const makeRightArrowsAble = () => {
  toggleClass(
    rightArrow,
    true,
    "slider__arrow",
    "disabled"
  );
  toggleClass(
    rightArrowToMax,
    true,
    "slider__arrow",
    "disabled"
  );
}

const toggleClass = (element, condition, class1, class2) => {
  if (condition) {
    element.classList.add(class1);
    element.classList.remove(class2);
  } else {
    element.classList.remove(class1);
    element.classList.add(class2);
  }
};

const changePageNumber = (page) => {
  const newPageNumber = Number(pageNumber.innerHTML) + page;
  pageNumber.innerHTML = newPageNumber;

  toggleClass(leftArrow, newPageNumber !== 1, "slider__arrow", "disabled");
  toggleClass(leftArrowTo1, newPageNumber !== 1, "slider__arrow", "disabled");
  toggleClass(
    rightArrow,
    newPageNumber !== pageAmount,
    "slider__arrow",
    "disabled"
  );
  toggleClass(
    rightArrowToMax,
    newPageNumber !== pageAmount,
    "slider__arrow",
    "disabled"
  );
};




export function changeCurrentPet(n, classForChoice) {
  let selection = document.querySelectorAll(classForChoice);
  console.log(selection);
  currentPet = (n + selection.length) % selection.length;
}

export function firstPet(classForChoice) {
  hidePet("to-left");
  currentPet = 0;
  changeCurrentPet(0, classForChoice);
  showPet("from-right");
}

export function lastPet(classForChoice) {
  hidePet("to-right");
  let selection = document.querySelectorAll(classForChoice);
  currentPet = selection.length - 1;
  changeCurrentPet(selection.length - 1, classForChoice);
  showPet("from-left");
}

export function hidePet(direction) {
  let pets = document.querySelectorAll(".block");
  isEnabled = false;
  pets[currentPet].classList.add(direction);
  pets[currentPet].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
}

export function showPet(direction) {
  let pets = document.querySelectorAll(".slider__pets .block");
  pets[currentPet].classList.add("next", direction);
  pets[currentPet].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;
  });
}

export function nextPet(n, classForChoice) {
  hidePet("to-left");
  changeCurrentPet(n + 1, classForChoice);
  showPet("from-right");
}

export function previousPet(n, classForChoice) {
  hidePet("to-right");
  changeCurrentPet(n - 1, classForChoice);
  showPet("from-left"), 10000;
}

export function changePageNumberToFirst() {
  hidePet("to-right");
  currentPet = 0;
  showPet("from-left");
  pageNumber.innerHTML = 1;
  makeLeftArrowsDisabled();
  toggleClass(
    rightArrow,
    pageNumber.innerHTML !== pageAmount,
    "slider__arrow",
    "disabled"
  );
  toggleClass(
    rightArrowToMax,
    pageNumber.innerHTML !== pageAmount,
    "slider__arrow",
    "disabled"
  );
}

export function changePageNumberToLast() {
  hidePet("to-left");
  currentPet = pageAmount - 1;
  showPet("from-right");
  pageNumber.innerHTML = pageAmount;
  makeRightArrowsDisabled();
  toggleClass(leftArrow, pageNumber.innerHTML !== 1, "slider__arrow", "disabled");
  toggleClass(leftArrowTo1, pageNumber.innerHTML !== 1, "slider__arrow", "disabled");

}

rightArrow?.addEventListener("click", (e) => {
  if (isEnabled) {
    console.log(currentPet);
    nextPet(currentPet, ".block");
    changePageNumber(1);
  }
});

leftArrow?.addEventListener("click", () => {
  if (isEnabled) {
    previousPet(currentPet, ".block");
    changePageNumber(-1);
  }
});

leftArrowTo1.addEventListener('click', () => {
  if (isEnabled) {
    changePageNumberToFirst()
  };
})

rightArrowToMax.addEventListener('click', () => {
  if (isEnabled) {
    changePageNumberToLast()
  }
});
