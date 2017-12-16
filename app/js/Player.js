class Player {
    constructor(name) {
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

    initialize() {
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

    move(e) {
        if (e.repeat || this.fired) {
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

    stopMoving(e) {
        if (this.fired === e.keyCode) {
            this.fired = false;
            this.sprite.stopMoving();
        }
    }
}