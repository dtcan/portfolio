import type { Background } from "../_base";
import https from 'https';
import { PNG } from 'pngjs';

const BACKGROUND_COLOUR = "#000000";
const SAMPLE_COLOUR = "#555555";
const SAMPLE_RADIUS = 0.1;
const SAMPLE_STD = 0.01;
const SAMPLES_PER_FRAME = 200;


export class Sample implements Background {

    name: string = "Metropolis Sampling";
    tag: string = "sample";

    image: Array<Array<number>> = [];
    imageDim: number = 0;
    imageReady: boolean = false;

    lastSample: [number, number];

    constructor() {
        https.get('https://dtcan.dev/faces/'+(Math.floor(Math.random() * 6))+'.png', res => {
            const parent: Sample = this;
            res.pipe(new PNG())
            .on('parsed', function() {
                parent.imageDim = this.width;
                parent.image = new Array(this.width).fill(undefined).map(() => new Array(this.height).fill(undefined));
                for (var y = 0; y < this.height; y++) {
                    for (var x = 0; x < this.width; x++) {
                        var idx = (this.width * y + x) << 2;
                        parent.image[x][y] = this.data[idx];
                    }
                }
                parent.imageReady = true;
            });
        });
    }

    private _sample(): [number, number] {
        if(this.lastSample == undefined) {
            this.lastSample = [Math.random(), Math.random()];
        }else {
            let x: number = 0.0;
            let y: number = 0.0;
            let r: number = 0.0;

            while(Math.random() > r) {
                let u1: number = Math.random();
                let u2: number = Math.random();
                let z1: number = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
                let z2: number = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2.0 * Math.PI * u2);
                x = this.lastSample[0] + z1 * SAMPLE_STD;
                y = this.lastSample[1] + z2 * SAMPLE_STD;
                if(0.0 < x && x < 1.0 && 0.0 < y && y < 1.0) {
                    r = this.image[Math.floor(x * this.imageDim)][Math.floor(y * this.imageDim)] / this.image[Math.floor(this.lastSample[0] * this.imageDim)][Math.floor(this.lastSample[1] * this.imageDim)];
                }else {
                    r = 0.0;
                }
            }
            
            this.lastSample = [x, y];
        }

        return this.lastSample;
    }

    draw(canvas: HTMLCanvasElement, delta: number, resized: boolean): void {
        let ctx: CanvasRenderingContext2D = canvas.getContext("2d");

        let range: number = Math.min(canvas.width, canvas.height);
        let offsetX: number = 0.0;
        let offsetY: number = 0.0;
        if(range < canvas.width) {
            offsetX = (canvas.width - range) / 2;
        }else if(range < canvas.height) {
            offsetY = (canvas.height - range) / 2;
        }

        if(resized) {
            ctx.fillStyle = BACKGROUND_COLOUR;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        if(!this.imageReady) {
            return;
        }
        
        for(let i = 0; i < SAMPLES_PER_FRAME; i++) {
            let sample: [number, number] = this._sample();
        
            ctx.fillStyle = SAMPLE_COLOUR;
            ctx.strokeStyle = "#00000000";
            ctx.beginPath();
            ctx.arc(offsetX + sample[0] * range, offsetY + sample[1] * range, SAMPLE_RADIUS, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
        }
    }

}