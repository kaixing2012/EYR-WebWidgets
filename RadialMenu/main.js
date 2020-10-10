let mainBtn = document.querySelector(`.btn-radial-menu`)
let active = false;

mainBtn.addEventListener(`click`, () => {

    if (!active) {
        mainBtn.classList.add("active");
        mainBtn.firstElementChild.style.transform = `scale(1.2) rotate(360deg)`;
    } else {
        mainBtn.classList.remove("active");
        mainBtn.firstElementChild.style.transform = `scale(1) rotate(-360deg)`;
    }

    mainBtn.firstElementChild.style.transitionDuration = `0.3s`;

    let outPaths = document.querySelectorAll(`.btn-path`);

    let iconRotateDegree = 0;

    outPaths.forEach((item, index) => {
        let ang = (index / outPaths.length) * -360;

        if (!active) {
            setTimeout(() => {
                item.firstElementChild.style.transition = `all 200ms cubic-bezier(0.680, -0.550, 0.265, 1.550)`;
                item.firstElementChild.style.transform = `translate(120%, -50%)`
            }, 100);
            item.firstElementChild.classList.remove(`d-none`)
            item.style.transform = `rotate(${ang}deg) translate(-50%, -50%)`
            item.firstElementChild.firstElementChild.style.transform = `rotate(${iconRotateDegree}deg)`
        } else {
            setTimeout(() => {
                item.firstElementChild.classList.add(`d-none`)
            }, 300);
            item.firstElementChild.style.transform = `translate(-50%, -50%)`
        }

        iconRotateDegree += 40;
    });

    active = !active
});