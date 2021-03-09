import type { Background } from "../_base";
import { UnionFind } from "../_base";


const SPREAD_RADIUS = 200.0;
const INTERPOLATE_SPEED = 1.0;
const BACKGROUND_COLOUR = "#000000";
const LINE_COLOUR = "#555555";
const LINE_WIDTH = 2;
const HIGHLIGHT_COLOUR = "#008800";
const HIGHLIGHT_LINE_WIDTH = 5;
const HIGHLIGHT_RADIUS = 5;

function toHex(n: number, d: number = 2): string {
    let str: string = n.toString(16);
    while(str.length < d) {
        str = "0"+str;
    }
    return str;
}

export class Graph implements Background  {

    adj: Array<Array<0 | 1>>;
    path: Array<number>;
    interpolate: number;

    constructor() {
        let n: number = Math.floor(Math.random() * 8) + 8;
        this.adj = new Array(n).fill(undefined).map(() => new Array(n).fill(0));

        let disjoint: UnionFind<null> = new UnionFind<null>(new Array(n).fill(null));
        
        while(true) {
            let i: number = Math.floor(Math.random() * this.adj.length);
            let j: number = Math.floor(Math.random() * this.adj.length);
            if(i != j && this.adj[i][j] == 0) {
                this.adj[i][j] = 1;
                this.adj[j][i] = 1;
                disjoint.union(i, j);

                let parent: number = disjoint.find(0);
                let disconnect: boolean = false;
                for(let k = 1; k < this.adj.length; k++) {
                    if(disjoint.find(k) != parent) {
                        disconnect = true;
                        break;
                    }
                }
                if(!disconnect) {
                    break;
                }
            }
        }
        
        this.createPath();
    }

    createPath(): void {
        let startNode: number = Math.floor(Math.random() * this.adj.length);
        let endNode: number = Math.floor(Math.random() * this.adj.length);
        while(startNode == endNode) {
            endNode = Math.floor(Math.random() * this.adj.length);
        }

        let frontier: Array<Array<number>> = [[startNode]];
        let visited: Array<boolean> = new Array(this.adj.length).fill(false);
        visited[startNode] = true;
        while(true) {
            let nextPath: Array<number> = frontier.pop();
            let nextNode: number = nextPath[nextPath.length - 1];
            if(nextNode == endNode) {
                this.path = nextPath;
                break;
            }
            for(let i = 0; i < this.adj.length; i++) {
                if(!visited[i] && this.adj[nextNode][i] == 1) {
                    visited[i] = true;
                    let newPath: Array<number> = [...nextPath];
                    newPath.push(i);
                    frontier.push(newPath);
                }
            }
        }

        this.interpolate = -1.0;
    }

    draw(canvas: HTMLCanvasElement, delta: number): void {
        let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        let centerX: number = canvas.width / 2;
        let centerY: number = canvas.height / 2;
        let angle: number = (2 * Math.PI) / this.adj.length;

        ctx.fillStyle = BACKGROUND_COLOUR;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.lineWidth = LINE_WIDTH;
        ctx.strokeStyle = LINE_COLOUR;
        for(let i = 0; i < this.adj.length; i++) {
            for(let j = 0; j < this.adj.length; j++) {
                if(this.adj[i][j] == 1) {
                    ctx.beginPath();
                    ctx.moveTo(centerX + Math.cos(angle * i) * SPREAD_RADIUS, centerY + Math.sin(angle * i) * SPREAD_RADIUS);
                    ctx.lineTo(centerX + Math.cos(angle * j) * SPREAD_RADIUS, centerY + Math.sin(angle * j) * SPREAD_RADIUS);
                    ctx.stroke();
                }
            }
        }

        this.interpolate += INTERPOLATE_SPEED * delta;
        if(this.interpolate >= this.path.length + 1) {
            this.createPath();
            return;
        }

        let i: number = Math.floor(this.interpolate);
        let partInterpolate: number = this.interpolate % 1.0;
        if(partInterpolate < 0.0) {
            partInterpolate += 1.0;
        }
        ctx.lineWidth = HIGHLIGHT_LINE_WIDTH;
        ctx.strokeStyle = "#00000000";
        if(i >= 0) {
            if(i < this.path.length - 1) {
                ctx.strokeStyle = HIGHLIGHT_COLOUR+toHex(Math.floor(255 * (1 - 4 * Math.pow(partInterpolate - 1/2, 2))));
                ctx.beginPath();
                ctx.moveTo(centerX + Math.cos(angle * this.path[i]) * SPREAD_RADIUS, centerY + Math.sin(angle * this.path[i]) * SPREAD_RADIUS);
                ctx.lineTo(centerX + Math.cos(angle * this.path[i+1]) * SPREAD_RADIUS, centerY + Math.sin(angle * this.path[i+1]) * SPREAD_RADIUS);
                ctx.stroke();
                ctx.strokeStyle = "#00000000";
            }
            ctx.fillStyle = HIGHLIGHT_COLOUR+toHex(Math.floor(255 * (1 - partInterpolate)));
            ctx.beginPath();
            ctx.arc(centerX + Math.cos(angle * this.path[i]) * SPREAD_RADIUS, centerY + Math.sin(angle * this.path[i]) * SPREAD_RADIUS, HIGHLIGHT_RADIUS, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
        }
        if(i < this.path.length - 1) {
            ctx.fillStyle = HIGHLIGHT_COLOUR+toHex(Math.floor(255 * partInterpolate));
            ctx.beginPath();
            ctx.arc(centerX + Math.cos(angle * this.path[i+1]) * SPREAD_RADIUS, centerY + Math.sin(angle * this.path[i+1]) * SPREAD_RADIUS, HIGHLIGHT_RADIUS, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
        }
    }
}
