class Background {
    constructor() {
        this.canvas = document.getElementById("background_layer");
    }

    load() {
        console.log("background loaded");
        let context = this.canvas.getContext('2d');
        context.beginPath();
        context.moveTo(200, 30);
        context.lineTo(200, 300);
        context.lineWidth = 10;
        context.strokeStyle = 'blue';
        context.lineCap = 'round';
        context.stroke();
    }
}
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
        this.stepLength = 10;
        console.log(this.options.ticksPerFrame, this.stepLength);
    }

    render() {
        let me = this,
            context = me.options.canvas.getContext('2d');

        context.clearRect(
            me.positionX - me.stepLength,
            me.positionY - me.stepLength,
            me.options.width + me.stepLength * 2,
            me.options.height + me.stepLength * 2);

        context.drawImage(
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
        console.log(me.positionX, me.positionY);
        console.log(background.canvas.getContext('2d').getImageData(me.positionX, me.positionY, 10, 10));
    }

    update() {
        let me = this;
        me.tick++;
        if (me.tick > me.options.ticksPerFrame) {
            me.tick = 0;
            me.frameIndex = me.frameIndex < (me.options.numberOfFrames - 1) ? (me.frameIndex + 1) : 0;
            switch (true) {
                case (me.direction === me.options.animations.down):
                    me.positionY = me.positionY > me.options.canvas.height - me.options.height - me.stepLength ?
                        me.options.canvas.height - me.options.height : me.positionY + me.stepLength;
                    break;
                case (me.direction === me.options.animations.up):
                    me.positionY = me.positionY < me.stepLength ? 0 : me.positionY - me.stepLength;
                    break;
                case (me.direction === me.options.animations.left):
                    me.positionX = me.positionX < me.stepLength ? 0 : me.positionX - me.stepLength;
                    break;
                case (me.direction === me.options.animations.right):
                    me.positionX = me.positionX > me.options.canvas.width - me.options.width - me.stepLength ?
                        me.options.canvas.width - me.options.width : me.positionX + me.stepLength;
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

    move(direction) {
        let me = this;
        me.isMoving = true;
        me.frameIndex = 0;
        me.direction = me.options.animations[direction];
        console.log('moving', direction);

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
        this.options = {
            canvas: document.getElementById("player1_layer"),
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
        this.fired = false;
    }

    initialize(){
        let me = this;
        window.addEventListener("load", function () {
            me.sprite.render();
        });
        document.onkeydown = function (e) {
            me.move(e);
        };
        document.onkeyup = function (e) {
            me.stopMoving(e);
        };
    }

    move(e){
        if (this.fired) {
            e.preventDefault();
            return
        }

        this.fired = e.keyCode;
        // console.log(this.fired);

        switch (e.keyCode) {
            case 37:
                e.preventDefault();
                this.sprite.move('left');
                break;
            case 38:
                e.preventDefault();
                this.sprite.move('up');
                break;
            case 39:
                e.preventDefault();
                this.sprite.move('right');
                break;
            case 40:
                e.preventDefault();
                this.sprite.move('down');
                break;
            default:
                console.log("only arrow keys work my friend");
            //do nothing
        }
    }

    stopMoving(e){
        if (this.fired === e.keyCode){
            this.fired = false;
            this.sprite.stopMoving();
        }
    }
}
let background = new Background();
background.load();

let player = new Player("Valentin");

player.initialize();