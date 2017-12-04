class Sprite {
    constructor(options) {
        this.options = options;
        this.tick = 0;
        this.frameIndex = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.image = new Image();
        this.image.src = this.options.imageSrc;
        this.direction = this.options.animations.down;
    }

    render() {
        this.options.context.clearRect(0, this.positionY, this.options.width, this.options.height);
        console.log(this.frameIndex, this.direction);

        this.options.context.drawImage(
            this.image,
            this.frameIndex * this.options.width,
            this.direction * this.options.height,
            this.options.width,
            this.options.height,
            this.positionX,
            this.positionY,
            this.options.width,
            this.options.height
        );
    }

    update() {
        this.tick++;
        if (this.tick > this.options.ticksPerFrame) {
            this.tick = 0;
            this.render();
            this.frameIndex = this.frameIndex < (this.options.numberOfFrames - 1) ? (this.frameIndex + 1) : 0;
            // this.positionY+=5;
        }
    }

    moveDown() {
        console.log("moving Down");
        this.direction = this.options.animations.down;
        this.render();
    }

    moveLeft() {
        this.direction = this.options.animations.left;
        console.log("moving Left");
        this.render();
    }

    moveRight() {
        this.direction = this.options.animations.right;
        console.log("moving Right");
        this.render();
    }

    moveUp() {
        this.direction = this.options.animations.up;
        console.log("moving Up");
        this.render();
    }


}