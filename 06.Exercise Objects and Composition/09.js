function createSortedList() {
    let result = [];
    let obj = {

        add: (el) => {
            result.push(el);
            obj.size++;
            return result.sort((a, b) => a - b);
        },
        remove: (index) => {
            if (index >= 0 && index < result.length) {
                result.splice(index, 1);
                obj.size--;
                return result.sort((a, b) => a - b);
            }
        },
        get: (index) => {
            if (index >= 0 && index < result.length) {
                return result[index];
            }
        },
        size: 0
    };
    return obj;
}
let list = createSortedList();
list.add(7);
list.add(2);
list.add(1);
list.add(45);
list.add(13);
list.add(18);

console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
list.remove(1);
console.log(list.size);