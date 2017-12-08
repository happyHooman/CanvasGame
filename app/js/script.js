"use strict";

const playerCanvas = document.getElementById("playerCanvas");
playerCanvas.width = 600;
playerCanvas.height = 600;

let player = new Player("Valentin");
// player.initialize();

window.addEventListener("load", function () {
    player.sprite.render();
});

document.onkeydown = function (e) {
    player.move(e);
};

document.onkeyup = function () {
    player.stopMoving();
};