let options = {
    context: playerCanvas.getContext("2d"),
    imageSrc: "img/rpg.png",
    numberOfFrames: 4,
    ticksPerFrame: 15,
    width: 34,
    height: 52,
    animations: {
        down: 0,
        left: 1,
        right: 2,
        up: 3
    }
};

let rpg = new Sprite(options);


