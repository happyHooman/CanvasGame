"use strict";

const playerCanvas = document.getElementById("playerCanvas");
playerCanvas.width = 600;
playerCanvas.height = 600;

document.onkeydown = moveCharacter;

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    rpg.update();
}

window.addEventListener("load", gameLoop);

// rpg.render();

function moveCharacter(e) {
    switch (e.keyCode) {
        case 37:
            //left
            e.preventDefault();
            rpg.moveLeft();
            break;
        case 38:
            //up
            e.preventDefault();
            rpg.moveUp();
            break;
        case 39:
            //right
            e.preventDefault();
            rpg.moveRight();
            break;
        case 40:
            //down
            e.preventDefault();
            rpg.moveDown();
            break;
        default:
            //do nothing
    }
}