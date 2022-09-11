const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gradient;
const styles = document.querySelectorAll(".alternate-style");

function alternateGradient() {
    styles.forEach((style) => {
        if (! style.disabled) {
            if (style.getAttribute("title") !== "color-5") {
                gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                let color1 = "";
                let color2 = "";
                if (style.getAttribute("title") === "color-1") {
                    color1 = "#ee0979";
                    color2 = "#ff6a00";
                } else if (style.getAttribute("title") === "color-2") {
                    color1 = "#4b05f0";
                    color2 = "#cb2446";
                } else if (style.getAttribute("title") === "color-3") {
                    color1 = "#00F260";
                    color2 = "#0575E6";
                } else {
                    color1 = "#00eaff";
                    color2 = "#fd08b4";
                }
                gradient.addColorStop(0.2, color1);
                gradient.addColorStop(0.8, color2);
            } else {
                gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, 'red');
                gradient.addColorStop(0.2, 'yellow');
                gradient.addColorStop(0.4, 'green');
                gradient.addColorStop(0.6, 'cyan');
                gradient.addColorStop(0.8, 'blue');
                gradient.addColorStop(1, 'magenta');
            }
        }
    })
}

alternateGradient();


class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
        this.characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*?/()";
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight;
    }
    draw(context) {
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
            this.y = 0;
        } else {
            this.y += 1;
        }
    }
}

class Effect {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 25;
        this.columns = this.canvasWidth/this.fontSize
        this.symbols = [];
        this.#initialize();
    }
    #initialize() { 
        for (let i = 0; i < this.columns; i++) {
            this.symbols[i] = new Symbol(i, this.canvasHeight * Math.random(), this.fontSize, this.canvasHeight);
        }
    }
    resize(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbol = [];
        this.#initialize();
    }
}

const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 160;
const nextFrame = 1000/fps;
let timer = 0;

function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if (timer > nextFrame) {
        const body = document.querySelector("body");
        if (body.classList.contains("dark")) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        } else {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        }
        ctx.textAlign = 'center';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = gradient; //'#0aff0a'
        ctx.font = effect.fontSize + 'px monospace';
        effect.symbols.forEach(symbol => symbol.draw(ctx));
        timer = 0;
    } else {
        timer += deltaTime;
    }
    requestAnimationFrame(animate);
}

animate(0);

window.addEventListener('resize', function() {
    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;
    effect.resize(canvas.width, canvas.height);
})
