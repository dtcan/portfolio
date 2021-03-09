export interface Background {
    draw: (canvas: HTMLCanvasElement, delta: number) => void
}

interface UnionFindNode<T> {
    value: T
    parent: number
    size: number
}

export class UnionFind<T> {

    nodes: Array<UnionFindNode<T>>;

    constructor(set: Array<T>) {
        this.nodes = [];

        for(let i = 0; i < set.length; i++) {
            let x: T = set[i];
            this.nodes.push({
                value: x,
                parent: i,
                size: 1
            });
        }
    }

    find(i: number) {
        let x: UnionFindNode<T> = this.nodes[i];
        if(x.parent != i) {
            x.parent = this.find(x.parent);
        }
        return x.parent;
    }

    union(i: number, j: number) {
        let ip: number = this.find(i);
        let jp: number = this.find(j);

        if(ip == jp) {
            return;
        }

        let x: UnionFindNode<T> = this.nodes[ip];
        let y: UnionFindNode<T> = this.nodes[jp];

        if(x.size < y.size) {
            x.parent = jp;
            y.size += x.size;
        }else {
            y.parent = ip;
            x.size += y.size;
        }
    }
}