class Node {
    private value: string;
    private prev: Node | undefined;
    private next: Node | undefined;

    public constructor(value: string) {
        this.value = value;
        this.prev = undefined;
        this.next = undefined;
    }

    public getValue(): string {
        return this.value;
    }

    public getNext(): Node | undefined {
        return this.next;
    }

    public setNext(node: Node): void {
        this.next = node;
    }

    public getPrev(): Node | undefined {
        return this.prev;
    }

    public setPrev(node: Node): void {
        this.prev = node;
    }
}

export default class List {
    private head: Node | undefined;

    public constructor() {
        this.head = undefined;
    }

    public add(value: string): void {
        if (this.isEmpty()) {
            this.head = new Node(value);
            return;
        }
        let node = this.head;
        let next = this.head.getNext();
        while (next !== undefined) {
            node = next;
            next = node.getNext();
        }
        const newNode = new Node(value);
        node.setNext(newNode);
        newNode.setPrev(node);
    }

    public find(value: string): Node | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.head.getValue() === value) {
            return this.head;
        }
        let node = this.head;
        let next = this.head.getNext();
        while (next !== undefined) {
            node = next;
            if (node.getValue() === value) {
                return node;
            }
            next = node.getNext();
        }
    }

    public values(): string[] {
        if (this.isEmpty()) {
            return [];
        }
        let node = this.head;
        let next = this.head.getNext();
        let ret = [this.head.getValue()];
        while (next !== undefined) {
            node = next;
            next = node.getNext();
            ret.push(node.getValue());
        }
        return ret;
    }

    public delete(value: string): void {
        if (!this.isEmpty()) {
            if (this.head.getValue() === value) {
                this.head = this.head.getNext();
                if (!this.isEmpty()) {
                    this.head.setPrev(undefined);
                }
                return;
            }
            let node = this.head;
            let next = this.head.getNext();
            while (next !== undefined || node.getValue() === value) {
                if (node.getValue() === value) {
                    const prev = node.getPrev();
                    if (prev) {
                        prev.setNext(next);
                    }
                    if (next) {
                        next.setPrev(prev);
                    }
                    console.log("prev: ", prev)
                    console.log("next: ", next)
                    return;
                }
                node = next;
                next = node.getNext();
            }
        }
    }

    private isEmpty(): boolean {
        return this.head === undefined;
    }
}
