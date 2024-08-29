export const createUnderlay = () => {
  let body = document.querySelector('body');
  const underlay = document.createElement('div');
  underlay.className = 'underlay';
  body.append(underlay);
  let popup = document.createElement('div');
  popup.className = 'popup';
  underlay.append(popup);
  return popup;
}

export const createPopup = (petsData) => {
  let body = document.querySelector('body');
  let popup = createUnderlay();
  // const underlay = createUnderlay();
  let sliderPets = document.querySelector('.slider__pets');
  // console.log(underlay);


  let pets = document.querySelectorAll('.pet');
  pets.forEach(pet => {
      // filling the block with a photo from JSON
      petsData.forEach(petData => {
        let  petName = pet.querySelector('.pet__name');
        let  petImage = pet.querySelector('.pet__image');
          if (petName.innerHTML == petData.name) {
              petImage.style = 'background-image: url("' + petData.img + '")';
          }
      })
      pet.addEventListener('click', (e) => {
        let underlay = document.querySelector('.underlay');
        underlay.style.display = 'flex';
        body.style.overflow = 'hidden';
        popup.innerHTML = '';
          let popupClose = document.createElement('div');
          let imgClose = document.createElement('img');
          let petPhoto = document.createElement('div');
          let popupCard = document.createElement('div');
          let popupPetInform = document.createElement('div');
          let popupTitleCont = document.createElement('div');
          let title = document.createElement('h3');
          let subtitle = document.createElement('h4');
          let description = document.createElement('h5');
          let ul = document.createElement('ul');
          let liAge = document.createElement('li');
          let liInocalations = document.createElement('li');
          let liDiseases = document.createElement('li');
          let liParasites = document.createElement('li');
          let p1 = document.createElement('p');
          let b1 = document.createElement('b');
          let p2 = document.createElement('p');
          let b2 = document.createElement('b');
          let p3 = document.createElement('p');
          let b3 = document.createElement('b');
          let p4 = document.createElement('p');
          let b4 = document.createElement('b');
          popupTitleCont.classList.add('popup__title-container');
          popupClose.classList.add('popup__close');
          popupCard.classList.add('popup__card');
          petPhoto.classList.add('pet__photo');
          popupPetInform.classList.add('pet__inform');
          title.classList.add('popup__title');
          subtitle.classList.add('popup__subtitle');
          description.classList.add('popup__description');
          ul.classList.add('popup__list');
          liAge.classList.add ('popup__age');
          popup.append(popupClose);
          popupClose.append(imgClose);
          imgClose.setAttribute('src', '../../assets/images/close.png');
          popup.append(popupCard);
          popupCard.append(petPhoto);
          popupCard.append(popupPetInform);
          popupPetInform.append(popupTitleCont)
          popupTitleCont.append(title);
          popupTitleCont.append(subtitle);
          popupPetInform.append(description);
          popupPetInform.append(ul);
          ul.append(liAge);
          liAge.append(p1);
          p1.append(b1);
          ul.append(liInocalations);
          liInocalations.append(p2);
          p2.append(b2);
          ul.append(liDiseases);
          liDiseases.append(p3);
          p3.append(b3);
          ul.append(liParasites);
          liParasites.append(p4);
          p4.append(b4);
          let  petName = pet.querySelector('.pet__name');

          petsData.forEach(petData => {
              if (petName.innerHTML == petData.name) {
                  petPhoto.style = 'background-image: url("' + petData.img + '")';
                  title.innerHTML = petData.name;
                  subtitle.innerHTML = petData.type + ' - ' + petData.breed;
                  description.innerHTML = petData.description;
                  p1.innerHTML = '<b style="font-weight: 700">Age: </b>' + petData.age;
                  p2.innerHTML = '<b>Inocalations: </b>' + petData.inoculations;
                  p3.innerHTML = '<b>Diseases: </b>' + petData.diseases;
                  p4.innerHTML = '<b>Parasites: </b>' + petData.parasites;
                  }
          })
      closePopup();
      });
  })
}

export const closePopup = () => {
  const body = document.querySelector('body');
  const popupClose = document.querySelector('.popup__close');
  const underlay = document.querySelector('.underlay');
  if (!body || !popupClose || !underlay) {
    console.error('One or more elements are not found.');
    return;
  }

  const closePopupHandler = () => {
    underlay.style.display = 'none';
    body.style.overflow = 'visible';
  };

  popupClose.addEventListener('click', closePopupHandler);

  underlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('underlay')) {
      closePopupHandler();
    }
  });
};
