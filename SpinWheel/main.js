let mainBtn = document.querySelector(`.btn-spin-wheel`);
let active = false;

mainBtn.addEventListener(`click`, () => {
  if (active) {
    mainBtn.classList.remove("active");
    mainBtn.firstElementChild.style.transform = `rotate(-90deg)`;
  } else {
    mainBtn.classList.add("active");
    mainBtn.firstElementChild.style.transform = `rotate(90deg)`;
  }

  mainBtn.firstElementChild.style.transitionDuration = `0.2s`;

  let orbitBtns = document.querySelectorAll(`.btn-orbit`);
  let toDegree = 225;
  let iconRotateDegree = 135;

  orbitBtns.forEach((item, index) => {
    if (!active) {
      item.classList.remove(`d-none`);
      item.firstElementChild.style.transform = `rotate(${iconRotateDegree}deg)`;

      item.animate(
        [
          {
            transform: `rotate(180deg) translateX(0%)`,
          },
          {
            transform: `rotate(${toDegree + 360}deg) translateX(180%)`,
          },
        ],
        {
          duration: 200,
          fill: `forwards`,
        }
      );
    } else {
      setTimeout(() => {
        item.classList.add(`d-none`);
      }, 300);

      item.animate(
        [
          {
            transform: `rotate(${toDegree + 360}deg) translateX(180%)`,
          },
          {
            transform: `rotate(180deg) translateX(0%)`,
          },
        ],
        {
          duration: 200,
          fill: `forwards`,
        }
      );
    }

    toDegree += 45;
    iconRotateDegree -= 45;
  });
  active = !active;
});
