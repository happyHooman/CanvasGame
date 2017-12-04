"use strict";

const playerCanvas = document.getElementById("playerCanvas");
playerCanvas.width = 600;
playerCanvas.height = 600;

document.onkeydown = moveCharacter;

// function gameLoop() {
//     window.requestAnimationFrame(gameLoop);
//     rpg.update();
// }

let l = rpg.render.bind(rpg);
window.addEventListener("load", l);


function moveCharacter(e) {
    switch (e.keyCode) {
        case 37:
            //left
            e.preventDefault(); //prevent page pan
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
        case 32:
            //stop
            e.preventDefault();
            rpg.stopMoving();
            break;
        default:
            //do nothing
    }
}