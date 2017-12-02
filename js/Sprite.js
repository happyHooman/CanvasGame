class Sprite {
    constructor(options) {
        this.options = options;
        this.tick = 0;
        this.frameIndex = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.image = new Image();
        this.image.src = this.options.imageSrc;
        // this.direction = "down";
    }

    render() {
        this.options.context.clearRect(0, this.positionY, this.options.width, this.options.height);
        console.log(4);

        this.options.context.drawImage(
            this.image,
            this.frameIndex * this.options.width,
            0,
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

    moveDown(){
        console.log("moving Down");
        this.render();
    }

    moveLeft(){

        console.log("moving Left");
    }

    moveRight(){
        console.log("moving Right");

    }

    moveUp(){

        console.log("moving Up");
    }


}