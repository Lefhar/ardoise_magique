class Ardoise {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.isDrawing = false;
        this.color = 'black';
        this.lineWidth = 1;

        this.canvas.addEventListener('mousedown', this.startDrawing.bind(this));
        this.canvas.addEventListener('mousemove', this.draw.bind(this));
        this.canvas.addEventListener('mouseup', this.stopDrawing.bind(this));

        document.getElementById('pipette').addEventListener('click', this.showColorPicker.bind(this));
        document.getElementById('gomme').addEventListener('click', this.clearCanvas.bind(this));

        const colors = document.querySelectorAll('.couleur');
        colors.forEach(color => {
            color.addEventListener('click', () => {
                this.color = color.style.backgroundColor;
            });
        });

        document.getElementById('fin').addEventListener('click', () => {
            this.lineWidth = 1;
        });
        document.getElementById('normal').addEventListener('click', () => {
            this.lineWidth = 5;
        });
        document.getElementById('epais').addEventListener('click', () => {
            this.lineWidth = 10;
        });
    }

    startDrawing(e) {
        this.isDrawing = true;
        this.context.beginPath();
        this.context.moveTo(e.clientX - this.canvas.offsetLeft, e.clientY - this.canvas.offsetTop);
    }

    draw(e) {
        if (this.isDrawing) {
            this.context.lineTo(e.clientX - this.canvas.offsetLeft, e.clientY - this.canvas.offsetTop);
            this.context.strokeStyle = this.color;
            this.context.lineWidth = this.lineWidth;
            this.context.lineCap = 'round';
            this.context.lineJoin = 'round';
            this.context.stroke();
        }
    }

    stopDrawing() {
        this.isDrawing = false;
    }

    showColorPicker() {
        this.color = window.prompt('Choisissez une couleur :');
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

const ardoise = new Ardoise();
