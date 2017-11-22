// var playerImage = new Image();
// playerImage.src = "img/big_girl.png";
//
var playerCanvas = document.getElementById("playerCanvas");
playerCanvas.width = 200;
playerCanvas.height = 320;
//
// var player = sprite({
//     context: playerCanvas.getContext("2d"),
//     // width: 145,
//     height: 320,
//     image: playerImage,
//     numberOfFrames: 2,
//     ticksPerFrame: 25,
//     // framesBorders: [[20, 144], [164, 144]], //walk down
//     // framesBorders: [[318, 144]] //idle face down
//     framesBorders: [[460, 152], [612, 142]] //walk up
// });

var rpgImage = new Image();
rpgImage.src = "img/rpg_sprite.png";

var rpg = sprite({
    context: playerCanvas.getContext("2d"),
    image: rpgImage,
    numberOfFrames: 4,
    height: 54,
    ticksPerFrame: 15,
    framesBorders: [[31,32],[63,32],[95,32],[127,32]]
});


function sprite(options) {

    var framesBorders = options.framesBorders;

    var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame,
        numberOfFrames = options.numberOfFrames;

    that.context = options.context;
    that.height = options.height;
    that.image = options.image;

    that.render = function () {
        // Clear the canvas

        that.context.clearRect(0, 0, that.width*2, that.height*2);

        that.width = framesBorders[frameIndex][1];
        // console.log("frameIndex: ", frameIndex);

        // Draw the animation
        that.context.drawImage(
            that.image,
            framesBorders[frameIndex][0],
            18,
            that.width,
            that.height,
            0,
            0,
            that.width,
            that.height
        );
    };

    that.update = function () {
        tickCount += 1;
        if (tickCount > ticksPerFrame) {
            tickCount = 0;
            this.render();
            // If the current frame index is in range
            if (frameIndex < numberOfFrames - 1) {
                // Go to the next frame
                frameIndex += 1;
            } else {
                frameIndex = 0;
            }
        }
    };

    return that;
}

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    // player.update();
    rpg.update();
}

// Start the game loop as soon as the sprite sheet is loaded
window.addEventListener("load", gameLoop);

var array = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
console.log(array);
var rotate = [];
for(var i = 0;i<4;i++){
    for(var j=0;j<4;j++){

    }
}

function logArray(array){
    for(var i = 0;i<4;i++){
        for(var j=0;j<4;j++){
            console
        }
    }
}