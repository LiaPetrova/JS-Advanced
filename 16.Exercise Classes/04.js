class List {
    constructor() {
        this.arr = [],
            this.size = this.arr.length
    }
    add(value) {
        this.arr.push(value);
        this.size = this.arr.length;
        this.arr.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.arr.splice(index, 1);
            this.size = this.arr.length;
            this.arr.sort((a, b) => a - b);
        } else {
            throw new Error('Index outside of the length of the collection!')
        }
    }
    get(index) {
        if (index >= 0 && index < this.size) {
            return this.arr[index];
        } else {
            throw new Error('Index outside of the length of the collection!')
        }
    }

}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));