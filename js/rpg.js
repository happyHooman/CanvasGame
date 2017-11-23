let options = {
    context: playerCanvas.getContext("2d"),
    imageSrc: "img/rpg_sprite.png",
    numberOfFrames: 4,
    ticksPerFrame: 15,
    width: 32,
    height: 54,
    offY: 18,
    framesStart: [31, 63, 95, 127]
};

let rpg = new Sprite(options);


