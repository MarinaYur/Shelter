export const openCloseBurgerMenu = () => {
  let burger = document.querySelector(".humburger");
  let navigation = document.querySelector(".nav");
  let shadow = document.querySelector(".shadow");
  let body = document.querySelector("body");
  let burgerLines = document.querySelectorAll(".humburger__line");
  let listLinks = document.querySelectorAll(".nav__list-link");

  body.addEventListener("click", (e) => {
    console.log("e.target", e.target);

    if (e.target === burger || Array.from(burgerLines).includes(e.target)) {
      burger.classList.toggle("burger_reverse");
      shadow.classList.toggle("shadow_on");
      body.style.overflow = "hidden";

      if (navigation.classList.contains("slide-in")) {
        navigation.classList.remove("slide-in");
        navigation.classList.add("slide-out");
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