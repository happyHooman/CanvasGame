class Sprite {
    constructor(options) {
        this.options = options;
        this.tick = 0;
        this.frameIndex = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.image = new Image();
        this.image.src = this.options.imageSrc;
    }

    render() {
        this.options.context.clearRect(0, 0, this.options.width, this.options.height);

        this.options.context.drawImage(
            this.image,
            this.options.framesStart[this.frameIndex],
            this.options.offY,
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
        }
    }
}