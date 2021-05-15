import type { Background } from '../base';

const BACKGROUND_COLOUR = "#000000";
const DRAW_SCALE = 15.0;
const WALL_ELASTICITY = 0.5;
const GRAVITY_SCALE = 10.0;
const STEPS_PER_FRAME = 1000;

interface Planet {
    id: number,
    color: string,
    radius: number,
    mass: number,
    x: number,
    y: number,
    dx: number,
    dy: number
}


export class Planets implements Background {

    name: string = "Planets";
    tag: string = "planet";

    planets: Array<Planet>;

    constructor() {
        this.planets = new Array(Math.floor(Math.random() * 3) + 3).fill(undefined).map((_,i) => {
            let angle: number = 2.0 * Math.PI * Math.random();
            let radius: number = 2.0;
            return {
                id: i,
                color: "#222222",
                radius: radius,
                mass: Math.PI * Math.pow(radius, 2),
                x: Math.cos(angle) * 20.0,
                y: Math.sin(angle) * 20.0,
                dx: Math.cos(angle) * 50.0,
                dy: Math.sin(angle) * 50.0
            }
        });
    }

    draw(canvas: HTMLCanvasElement, delta: number): void {
        let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        let centerX: number = canvas.width / 2;
        let centerY: number = canvas.height / 2;

        ctx.fillStyle = BACKGROUND_COLOUR;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        delta /= STEPS_PER_FRAME;
        for(let _ = 0; _ < STEPS_PER_FRAME; _++) {
            for(let i = 0; i < this.planets.length; i++) {
                let planet = this.planets[i];

                for(let j = i+1; j < this.planets.length; j++) {
                    let other = this.planets[j];

                    // Gravity
                    let diffX: number = other.x - planet.x;
                    let diffY: number = other.y - planet.y;
                    let dist2: number = Math.pow(diffX, 2) + Math.pow(diffY, 2);
                    let factor: number = (other.mass * GRAVITY_SCALE * delta) / dist2;
                    planet.dx += factor * diffX;
                    planet.dy += factor * diffY;

                    // Collision with other planet
                    let dist = Math.sqrt(dist2)
                    if(dist < (planet.radius + other.radius)) {
                        let sum: number = planet.mass + other.mass;
                        let diffDX: number = other.dx - planet.dx;
                        let diffDY: number = other.dy - planet.dy;

                        let commonFactor: number = (diffDX * diffX + diffDY * diffY) / dist2;
                        let factor1: number = (2 * planet.mass * commonFactor) / sum;
                        let factor2: number = (2 * other.mass * commonFactor) / sum;
            
                        planet.dx += factor2 * diffX;
                        planet.dy += factor2 * diffY;
                        other.dx -= factor1 * diffX;
                        other.dy -= factor1 * diffY;
                    }
                }
                
                // Collision with canvas edges
                let drawX = planet.x * DRAW_SCALE
                let drawY = planet.y * DRAW_SCALE
                if((drawX > centerX && planet.dx > 0) || (drawX < -centerX && planet.dx < 0)) {
                    planet.dx *= -1 * WALL_ELASTICITY;
                }
                if((drawY > centerY && planet.dy > 0) || (drawY < -centerY && planet.dy < 0)) {
                    planet.dy *= -1 * WALL_ELASTICITY;
                }

                // Apply velocity to position
                planet.x += planet.dx * delta;
                planet.y += planet.dy * delta;
            }
        }

        // Draw planets
        ctx.strokeStyle = "#00000000";
        for(let planet of this.planets) {
            ctx.fillStyle = planet.color;
            ctx.beginPath();
            ctx.arc(centerX + planet.x * DRAW_SCALE, centerY + planet.y * DRAW_SCALE, planet.radius * DRAW_SCALE, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
        }
    }
}