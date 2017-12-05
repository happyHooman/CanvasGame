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
        this.stepLength = 3;
    }

    render() {
        let me = this;
        me.context.clearRect(me.positionX - me.stepLength, me.positionY - me.stepLength, me.options.width + me.stepLength * 2, me.options.height + me.stepLength * 2);
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
        }
    }

    moveDown() {
        let me = this;
        console.log("moving Down");
        me.direction = me.options.animations.down;
        me.frameIndex = 0;
        me.isMoving = true;

        me.update();

    }


    moveLeft() {
        let me = this;
        console.log("moving Left");
        me.direction = me.options.animations.left;
        me.frameIndex = 0;
        me.isMoving = true;

        me.update();
    }

    moveRight() {
        let me = this;
        console.log("moving Right");
        me.direction = me.options.animations.right;
        me.frameIndex = 0;
        me.isMoving = true;

        me.update();

    }

    moveUp() {
        let me = this;
        console.log("moving Up");
        me.direction = me.options.animations.up;
        me.frameIndex = 0;
        me.isMoving = true;

        me.update();
    }

    stopMoving() {
        this.isMoving = false;
        this.frameIndex = 0;
        this.render();
    }

}