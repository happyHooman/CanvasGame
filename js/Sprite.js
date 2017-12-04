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
        me.context.clearRect(0, me.positionY, me.options.width, me.options.height);
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
        this.tick++;
        if (this.tick > this.options.ticksPerFrame) {
            this.tick = 0;
            this.render();
            this.frameIndex = this.frameIndex < (this.options.numberOfFrames - 1) ? (this.frameIndex + 1) : 0;
            // this.positionY+=5;
        }
    }

    moveDown() {
        let me = this;
        console.log("moving Down");
        me.direction = me.options.animations.down;
        me.frameIndex = 0;
        me.isMoving = true;

        neverMind();

        function neverMind() {
            // console.log("I don't mind");
            me.tick++;
            if (me.tick > me.options.ticksPerFrame) {
                me.tick = 0;
                me.frameIndex = me.frameIndex < (me.options.numberOfFrames - 1) ? (me.frameIndex + 1) : 0;
                me.render();
                // this.positionY+=5;
            }
            if (me.isMoving) {
                window.requestAnimationFrame(neverMind);
            }
        }
    }


    moveLeft() {
        let me = this;
        console.log("moving Left");
        me.direction = me.options.animations.left;
        me.frameIndex = 0;
        me.isMoving = true;

        neverMind();

        function neverMind() {
            // console.log("I don't mind");
            me.tick++;
            if (me.tick > me.options.ticksPerFrame) {
                me.tick = 0;
                me.frameIndex = me.frameIndex < (me.options.numberOfFrames - 1) ? (me.frameIndex + 1) : 0;
                me.render();
                // this.positionY+=5;
            }
            if (me.isMoving) {
                window.requestAnimationFrame(neverMind);
            }
        }
    }

    moveRight() {
        let me = this;
        console.log("moving Right");
        me.direction = me.options.animations.right;
        me.frameIndex = 0;
        me.isMoving = true;

        neverMind();

        function neverMind() {
            // console.log("I don't mind");
            me.tick++;
            if (me.tick > me.options.ticksPerFrame) {
                me.tick = 0;
                me.frameIndex = me.frameIndex < (me.options.numberOfFrames - 1) ? (me.frameIndex + 1) : 0;
                me.render();
                // this.positionY+=5;
            }
            if (me.isMoving) {
                window.requestAnimationFrame(neverMind);
            }
        }
    }

    moveUp() {
        let me = this;
        console.log("moving Up");
        me.direction = me.options.animations.up;
        me.frameIndex = 0;
        me.isMoving = true;

        neverMind();

        function neverMind() {
            // console.log("I don't mind");
            me.tick++;
            if (me.tick > me.options.ticksPerFrame) {
                me.tick = 0;
                me.frameIndex = me.frameIndex < (me.options.numberOfFrames - 1) ? (me.frameIndex + 1) : 0;
                me.render();
                // this.positionY+=5;
            }
            if (me.isMoving) {
                window.requestAnimationFrame(neverMind);
            }
        }
    }

    stopMoving() {
        this.isMoving = false;
        this.frameIndex = 0;
        this.render();
    }

}