// const modalFrame = document.querySelector(`.modal-header`)

// modalFrame.addEventListener(`mousedown`, (event) => {
//     event.preventDefault();

//     let prevX = event.clientX;
//     let prevY = event.clientY;

//     window.addEventListener(`mousemove`, mousemove)
//     window.addEventListener(`mouseup`, mouseup)

//     function mousemove(event) {
//         event.preventDefault();
//         let newX = prevX - event.clientX;
//         let newY = prevY - event.clientY;

//         const rect = modalFrame.getBoundingClientRect();

//         modalFrame.style.top = `${rect.top - newY}px`;
//         modalFrame.style.left = `${rect.left - newX}px`;

//         prevX = event.clientX;
//         prevY = event.clientY;
//     }

//     function mouseup() {
//         window.removeEventListener(`mousemove`, mousemove);
//         window.removeEventListener(`mouseup`, mouseup)
//     }

// })

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        window.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        window.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        window.onmouseup = null;
        window.onmousemove = null;
    }
}