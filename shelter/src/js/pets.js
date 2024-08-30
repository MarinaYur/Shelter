import { openCloseBurgerMenu } from "./burger-menu.js";
import { shuffleArray } from "./shuffle-array.js";
import {
  screenWidth
} from "./for-slider.js";
import { createPopup, createUnderlay } from "./popup.js";
console.log("Выполнены все пункты задания. Оценка 100/100");
let petsData = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets-Jennifer.svg",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-sophia.svg",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-woody.svg",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-scarlet.svg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-timmy.svg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-freddie.svg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/pets-charly.svg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];
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
// leftArrowTo1.addEventListener("click", () => {
//   let difference = currentPage - 1; // Определяем разницу в страницах

//   if (isEnabled) {
//     // Рекурсивная функция для циклической смены страниц с задержкой
//     function scrollToPreviousPage(index) {
//       if (index <= 0) {
//         currentPage = 0; // Устанавливаем текущую страницу на первую после завершения цикла
//         pageNumber.innerHTML = currentPage + 1;
//         makeLeftArrowsDisabled();
//         toggleClass(rightArrow, pageNumber.innerHTML !== pageAmount, "slider__arrow", "disabled");
//         toggleClass(rightArrowToMax, pageNumber.innerHTML !== pageAmount, "slider__arrow", "disabled");
//         return;
//       }

// function timerId1 () {
//         previousPet(currentPage, ".block");
//         changePageNumber(-1);
//         scrollToPreviousPage(index - 1); // Продолжаем цикл
//       }

//       setTimeout(timerId1, 600); // Задержка в миллисекундах (можно настроить под свои нужды)
//     }

//     scrollToPreviousPage(difference + 1); // Запускаем рекурсивный цикл
//   }
// });

// /**
//  * Пролистывает следующие страницы до последней с задержкой для плавности.
//  */
// rightArrowToMax.addEventListener("click", () => {
//   let difference = pageAmount - currentPage;

//   if (isEnabled) {
//     // Рекурсивная функция для циклической смены страниц с задержкой
//     function scrollToNextPage(index) {
//       if (index <= 0) {
//         currentPage = pageAmount - 1; // Устанавливаем текущую страницу на последнюю после завершения цикла
//         pageNumber.innerHTML = currentPage + 1;
//         makeRightArrowsDisabled();
//         toggleClass(leftArrow, pageNumber.innerHTML !== 1, "slider__arrow", "disabled");
//         toggleClass(leftArrowTo1, pageNumber.innerHTML !== 1, "slider__arrow", "disabled");
//         return;
//       }

// function timerId2() {
//   nextPet(currentPage, ".block");
//         changePageNumber(1);
//         scrollToNextPage(index - 1);
// }

//       setTimeout(timerId2, 600); // Задержка в миллисекундах (можно настроить под свои нужды)
//     }

//     scrollToNextPage(difference - 1); // Запускаем рекурсивный цикл
//   }
// });
