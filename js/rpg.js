let options = {
    context: playerCanvas.getContext("2d"),
    imageSrc: "img/rpg.png",
    numberOfFrames: 4,
    ticksPerFrame: 15,
    width: 34,
    height: 52,
    offY: 0, //moveDown
    // offY: 52,   //moveLeft
    // offY: 104, //moveRight
    // offY: 156, //moveUp

    framesStart: [0, 34, 68, 102]
};

let rpg = new Sprite(options);


