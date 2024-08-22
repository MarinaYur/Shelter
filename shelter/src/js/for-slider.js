export const screenWidth = () => {
  const width = window.innerWidth;
  return width > 1001 ? 'desktop' : width <= 550 ? 'mobile' : 'tablet';

};

export const updateScreenWidth = () => {
  const width = window.innerWidth;
  screenWidth();
  side = "";
  prevSide = "";
  prevPetsArray = [];
  currentPet = 0;
};