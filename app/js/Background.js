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