"use strict";

const playerCanvas = document.getElementById("playerCanvas");
playerCanvas.width = 600;
playerCanvas.height = 600;

document.onkeydown = moveCharacter;
document.onkeyup = stopCharacter;

window.addEventListener("load", function () {
    rpg.render();
});

function stopCharacter() {
    rpg.stopMoving();
}


function moveCharacter(e) {
    e.preventDefault();
    if (e.repeat) {
        return
    }
    switch (e.keyCode) {
        case 37:
            rpg.moveLeft();
            break;
        case 38:
            rpg.moveUp();
            break;
        case 39:
            rpg.moveRight();
            break;
        case 40:
            rpg.moveDown();
            break;
        default:
        //do nothing
    }
}