let isEnabled = true;
let currentPet = 0;

export const screenWidth = () => {
  const width = window.innerWidth;
  return width > 1001 ? 'desktop' : width <= 550 ? 'mobile' : 'tablet';

};



export function changeCurrentPet(n, classForChoice) {
  let selection = document.querySelectorAll(classForChoice);
  console.log(selection);
  // console.log(selection);
  currentPet = (n + selection.length) % selection.length;
  console.log(currentPet);
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