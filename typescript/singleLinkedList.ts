class Node {
    private value: string;
    private next: Node | undefined;

    public constructor(value: string) {
        this.value = value;
        this.next = undefined;
    }

    public getValue(): string {
        return this.value;
    }

    public setNext(nextValue: Node | undefined): void {
        this.next = nextValue;
    }

    public getNext(): Node | undefined {
        return this.next;
    }
}

export default class List {
    private head: Node | undefined;

    public constructor() {
        this.head = undefined;
    }

    public find(value: string): Node | undefined {
        if (this.isEmpty() || this.head.getValue() === value) {
            return this.head;
        }
        let node = this.head;
        let next = undefined;
        do {
            if (node.getValue() === value) {
                return node;
            }
            next = node.getNext();
            node = next;
        } while (next !== undefined)
        return undefined;
    }

    public add(value: string): void {
        if (this.isEmpty()) {
            this.head = new Node(value);
        } else {
            let node = this.head;
            let next = undefined;
            do {
                node = next ? next : node;
                next = node.getNext();
            } while (next !== undefined)
            node.setNext(new Node(value));
        }
    }

    public values(): Node[] {
        if (this.isEmpty()) {
            return [];
        }
        let node = this.head;
        let ret = [];
        do {
            ret.push(node.getValue());
            node = node.getNext();
        } while (node !== undefined)
        return ret;
    }
    
    public delete(value: string): void {
        if (!this.isEmpty()) {
            let node = this.head;
            let next = undefined;
            if (this.head.getValue() === value) {
                this.head = this.head.getNext();
            }
            do {
                node = next ? next : node;
                next = node.getNext();
            } while (next !== undefined && next.value() !== value)
            if (next === undefined) {
                node.setNext(undefined);
                return;
            }
            if (next.value() === value) {
                node.setNext(next.getNext());
            }
        }
    }
    
    private isEmpty(): boolean {
        return this.head === undefined;
    }
}