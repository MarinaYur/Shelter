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
