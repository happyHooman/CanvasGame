"use strict";

const playerCanvas = document.getElementById("playerCanvas");
playerCanvas.width = 600;
playerCanvas.height = 600;

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    // bigGirl.update();
    rpg.update();
}

window.addEventListener("load", gameLoop);