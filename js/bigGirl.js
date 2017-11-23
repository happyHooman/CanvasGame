let options = {
    context: playerCanvas.getContext("2d"),
    imageSrc: "img/big_girl.png",
    numberOfFrames: 2,
    ticksPerFrame: 25,
    width: 144,
    height: 320,
    offY: 0,
    framesStart: [20, 164 ], //walk down
    // framesBorders: [[318, 144]] //idle face down
    // framesBorders: [[460, 152], [612, 142]] //walk up
 };

let bigGirl = new Sprite(options);