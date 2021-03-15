class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class List { 
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(value) {
        let node = new Node(value);
        if (this.length === 0)
            this.head = node;
        else {
            let q = this.head;
            while(q.next)
                q = q.next;
            q.next = new Node(value);
        }
        this.length++;
    }
    remove(value) {
        if (this.head.data === value) {
            this.head = this.head.next;
            this.length--;
            return true;
        } else
            for (let q = this.head; q.next; q = q.next)
                if (q.next.data === value) {
                    q.next = q.next.next;
                    this.length--;
                    return true;
                }
        return false;
    }
    contains(value) {
        for (let i = this.head; i; i = i.next)
            if (i.data === value)
                return true;
        return false;
    }
    [Symbol.iterator] = function() {
        let currentNode = this.head;
        return {
            next() {
                if (currentNode) {
                    let value = currentNode.data;
                    currentNode = currentNode.next;
                    return {value: value, done: false};
                }
                return {done: true};
            }
        };
    };
    clear() {
        this.head = null;
    }
    count() {
        return this.length;
    }
    log() {
        let result = '';
        for (let j = this.head; j; j = j.next) {
            result += j.data;
            if (j.next)
                result += ', ';
        }
        console.log(result);
    }
}

function createLinkedList(arr){
    let linkedlist = new List();
    arr.forEach(value => linkedlist.add(value));
    return linkedlist;
}
const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();// "100, 1, 2, 3, 100, 4, 5, 100"
while(ll.remove(100));
ll.log();// "1, 2, 3, 4, 5"
ll.add(10);
ll.log();// "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10));// "true"
let sum = 0;
for(const n of ll) {
    sum += n;
}
console.log(sum);// "25"
ll.clear();
ll.log();// ""
