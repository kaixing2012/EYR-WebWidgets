let modal = document.getElementById("modal");
let header = document.getElementById(modal.id + "header");
let newx = 0,
  newy = 0,
  prevx = 0,
  prevy = 0;

header.addEventListener("mousedown", (e) => {
  e = e || window.event;
  e.preventDefault();

  prevx = e.clientX;
  prevy = e.clientY;

  window.onmousemove = elementDrag;
  window.onmouseup = closeDragElement;
});

function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();

  newx = prevx - e.clientX;
  newy = prevy - e.clientY;
  prevx = e.clientX;
  prevy = e.clientY;

  modal.style.top = modal.offsetTop - newy + "px";
  modal.style.left = modal.offsetLeft - newx + "px";
}

function closeDragElement() {
  window.onmouseup = null;
  window.onmousemove = null;
}

let trigger = document.getElementById(modal.id + "trigger");
let content = document.getElementById(modal.id + "content");
let active = false;

trigger.addEventListener("click", () => {
  content.animate(
    [
      {
        height: "0",
        width: "0",
      },
      {
        height: "0%",
        width: "100%",
      },
      {
        height: "100%",
        maxHeight: "320px",
        width: "100%",
      },
    ],
    {
      duration: 1000,
      fill: `forwards`,
    }
  );
  active = !active;
});
