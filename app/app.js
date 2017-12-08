class Sprite {
    constructor(options) {
        this.options = options;
        this.context = options.context;
        this.tick = 0;
        this.frameIndex = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.image = new Image();
        this.image.src = this.options.imageSrc;
        this.direction = this.options.animations.down;
        this.isMoving = false;
        this.stepLength = 5;
        console.log(this.options.ticksPerFrame);
    }

    render() {
        let me = this;
        me.options.context.clearRect(
            me.positionX - me.stepLength,
            me.positionY - me.stepLength,
            me.options.width + me.stepLength * 2,
            me.options.height + me.stepLength * 2);
        // console.log(me.frameIndex, me.direction);

        me.options.context.drawImage(
            me.image,
            me.frameIndex * me.options.width,
            me.direction * me.options.height,
            me.options.width,
            me.options.height,
            me.positionX,
            me.positionY,
            me.options.width,
            me.options.height
        );
    }

    update() {
        let me = this;
        me.tick++;
        if (me.tick > me.options.ticksPerFrame) {
            me.tick = 0;
            me.frameIndex = me.frameIndex < (me.options.numberOfFrames - 1) ? (me.frameIndex + 1) : 0;
            switch (true) {
                case (me.direction === me.options.animations.down):
                    me.positionY += me.stepLength;
                    break;
                case (me.direction === me.options.animations.up):
                    me.positionY -= me.stepLength;
                    break;
                case (me.direction === me.options.animations.left):
                    me.positionX -= me.stepLength;
                    break;
                case (me.direction === me.options.animations.right):
                    me.positionX += me.stepLength;
                    break;
            }
            me.render();
        }
        if (me.isMoving) {
            window.requestAnimationFrame(function () {
                me.update();
            });
        } else {
            window.requestAnimationFrame(function () {
                me.tick = 0;
                me.frameIndex = 0;
                me.render();
            })
        }
    }

    move(direction){
        let me = this;
        me.isMoving = true;
        me.frameIndex = 0;
        me.direction = me.options.animations[direction];
        console.log('moving',direction);

        me.update();
    }

    stopMoving() {
        let me = this;
        me.isMoving = false;
        me.frameIndex = 0;
        window.requestAnimationFrame(function () {
            me.update();
        });
    }

}
class Player{
    constructor(name){
        this.name = name;
        this.canvas = document.getElementById("playerCanvas");
        this.options = {
            context: this.canvas.getContext("2d"),
            imageSrc: "img/rpg.png",
            numberOfFrames: 4,
            ticksPerFrame: 3,
            width: 34,
            height: 52,
            animations: {
                down: 0,
                left: 1,
                right: 2,
                up: 3
            }
        };
        this.sprite = new Sprite(this.options);
        this.sprite.render();
    }

    initialize(){
        document.onkeydown = function (e) {
            this.move(e);
        }
        document.onkeyup = function () {
            this.stopMoving();
        }
    }

    move(e){
        e.preventDefault();
        if (e.repeat) {
            return
        }
        switch (e.keyCode) {
            case 37:
                this.sprite.move('left');
                break;
            case 38:
                this.sprite.move('up');
                break;
            case 39:
                this.sprite.move('right');
                break;
            case 40:
                this.sprite.move('down');
                break;
            default:
            //do nothing
        }
    }

    stopMoving(){
        this.sprite.stopMoving();
    }

}
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