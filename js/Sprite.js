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
    }

    render() {
        let me = this;
        me.context.clearRect(me.positionX, me.positionY, me.options.width, me.options.height);
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
            console.log("next frame");
            me.tick = 0;
            me.frameIndex = me.frameIndex < (me.options.numberOfFrames - 1) ? (me.frameIndex + 1) : 0;
            // me.positionY -= 2;
            switch (me.direction) {
                case 0:
                    me.positionY += 2;
                    break;
                case 3:
                    me.positionY -= 2;
                    break;
                case 1:
                    me.positionX -= 2;
                    break;
                case 2:
                    me.positionX += 2;
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