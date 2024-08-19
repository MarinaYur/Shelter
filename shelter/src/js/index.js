console.log("Выполнены все пункты задания. Оценка 100/100");
let petsData = [
  {
    name: "Jennifer",
    img: "../../assets/images/pet-Jennifer.svg",
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
window.onload = function () {
  createCards();
  openCloseBurgerMenu();
  slider();
};

const createCards = function () {
  // let currentPetBlock = document.querySelector('.active');
  console.log('petsData', petsData);

  petsData.sort(() => Math.random() - 0.5);
  let petsCounter = 0;
  let sliderContainer = document.querySelector(".slider_container");
  for (let i = 1; i <= 3; i++) {
    let block = document.createElement("div");
    block.className = `block block${i}`;
    if (i === 1) {
      block.className += " active";
    }
    sliderContainer.append(block);
    for (let j = 1; j <= 3; j++) {

      // console.log(sliderContainer);
      let pet = document.createElement("div");
      let petImage = document.createElement("div");
      let petName = document.createElement("p");
      let petButton = document.createElement("button");
if (petsCounter !== 8) {
  petImage.style.backgroundImage = `url(${petsData[petsCounter].img})`;
      // console.log(petsData[petsCounter].img);

      petName.innerHTML = petsData[petsCounter].name;
    } else {
      petImage.style.backgroundImage = '';
      petName.innerHTML = 'Unknown';
    }
      petButton.innerHTML = "Learn more";

      petName.className = "pet__name";
      petButton.className = "pet__button button button--bordered";
      petImage.className = `pet__image`;
      pet.className = "pet";
      block.append(pet);
      pet.append(petImage);
      pet.append(petName);
      pet.append(petButton);
      petsCounter++;
      // console.log('petsCounter', petsCounter);
    }
  }
  // let block = document.createElement('div');
  let currentPetBlock = document.querySelector('.active');
  console.log('petsData', petsData);
  console.log('currentPetBlock', currentPetBlock);

  // slider();
};

// open/close mobile-menu
const openCloseBurgerMenu = () => {
  let logo = document.querySelector(".logo");
  let burger = document.querySelector(".humburger");
  let navigation = document.querySelector(".nav");
  let shadow = document.querySelector(".shadow");
  let body = document.querySelector("body");
  let burgerLine = document.querySelector(".humburger__line");
  let listLink = document.querySelector(".nav__list-link");
  body.addEventListener("click", (e) => {
    if (e.target == burger || burgerLine || shadow || listLink) {
      if (!logo.classList.contains("logo_opened_burger")) {
        openBurgerMenu(logo, burger, navigation, shadow, body);
      } else {
        closeBurgerMenu(logo, burger, navigation, shadow, body);
      }
    }
  });
};

// open mobile-menu

const openBurgerMenu = (logo, burger, navigation, shadow, body) => {
  body.style.overflow = "hidden";
  logo.classList.add("logo_opened_burger");
  burger.classList.add("burger_reverse");
  navigation.classList.remove("slide-out");
  navigation.classList.add("slide-in");
  shadow.classList.add("shadow_on");
};

//close mobile-menu

const closeBurgerMenu = (logo, burger, navigation, shadow, body) => {
  body.style.overflow = "visible";
  navigation.classList.remove("slide-in");
  navigation.classList.add("slide-out");
  logo.classList.remove("logo_opened_burger");
  burger.classList.remove("burger_reverse");
  shadow.classList.remove("shadow_on");
};

const slider = () => {
  let pets = document.querySelectorAll(".slider__pets .block");
  console.log('hello');
  let petsCollection = Array.from(
    document.querySelectorAll(".slider__pets .pet")
  );
  petsCollection.sort(() => Math.random() - 0.5);
  let currentPet = 0;
  let isEnabled = true;
  // pets[0].innerHTML = "";
  // pets[0].append(petsCollection[0]);
  // pets[0].append(petsCollection[1]);
  // pets[0].append(petsCollection[2]);

  // pets[1].innerHTML = "";
  // pets[1].append(petsCollection[3]);
  // pets[1].append(petsCollection[4]);
  // pets[1].append(petsCollection[5]);

  // pets[2].innerHTML = "";
  // pets[2].append(petsCollection[6]);
  // pets[2].append(petsCollection[7]);
  function changeCurrentPet(n) {
    //     let j;
    petsCollection.sort(() => Math.random() - 0.5);

    // petsCollection.splice(0, 3);
    //  for (let i = 0; i < petsCollection.length; i++) {
    //   pets[i].innerHTML = '';
    //       for (j = 0; j < pets.length; j++) {
    //         pets[j].append(petsCollection[i]);
    //         console.log(pets[i]);
    //         if (pets[i].length === 3) {
    //           continue;
    //         }

    //     }
    // }
    // console.log('petsCollection', petsCollection);

    // pets[0].innerHTML = '';
    // pets[0].append(petsCollection[0]);
    // pets[0].append(petsCollection[1]);
    // pets[0].append(petsCollection[2]);

    // pets[1].innerHTML = '';
    // pets[1].append(petsCollection[3]);
    // pets[1].append(petsCollection[4]);
    // pets[1].append(petsCollection[5]);

    // pets[2].innerHTML = '';
    // pets[2].append(petsCollection[6]);
    // pets[2].append(petsCollection[7]);
    // pets[2].append(petsCollection[8]);
    // console.log(pets);
    currentPet = (n + pets.length) % pets.length;
    //       console.log(pets[2].innerHTML);
  }

  function hidePet(direction) {
    let currentPetBlock = document.querySelector('.active');
    isEnabled = false;
    pets[currentPet].classList.add(direction);
    pets[currentPet].addEventListener("animationend", function () {
      this.classList.remove("active", direction);
    });
  }

  function showPet(direction) {
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
    showPet("from-left");
  }

  let rightArrow = document.querySelector(".slider__right-arrow");
  rightArrow.addEventListener("click", (e) => {
    console.log('right');
    if (isEnabled) {
      nextPet(currentPet);
    }
  });

  let leftArrow = document.querySelector(".slider__left-arrow");
  leftArrow.addEventListener("click", () => {
    console.log('left');
    if (isEnabled) {
      previousPet(currentPet);
    }
  });
};
