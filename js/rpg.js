let options = {
    context: playerCanvas.getContext("2d"),
    imageSrc: "img/rpg.png",
    numberOfFrames: 4,
    ticksPerFrame: 15,
    width: 34,
    height: 52,
    animations: {
        walkDown: 0,
        walkLeft: 1,
        walkRight: 2,
        walkUp: 3
    }
};

let rpg = new Sprite(options);


