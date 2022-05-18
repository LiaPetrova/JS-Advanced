(function() {
    String.prototype.ensureStart = function(str) {
        if (!this.startsWith(str)) {
            return str.concat(this);
        } else {
            return this.toString();
        }
    }
    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) {
            return this.concat(str);
        } else {
            return this.toString();
        }
    }
    String.prototype.isEmpty = function() {
        return this.length === 0 ? true : false;
        // if (this.length === 0) {
        //     return true;
        // } else {
        //     return false;
        // }
    }
    String.prototype.truncate = function(n) {
            if (n < 4) {
                return '.'.repeat(n);
            }
            if (this.toString().length <= n) {
                return this.toString();
            } else {
                let lastIndex = this.toString().substr(0, n - 3).lastIndexOf(' ');
                if (lastIndex !== -1) {
                    return this.toString().substr(0, lastIndex) + '...';
                } else {
                    return this.toString().substr(0, n - 3) + '...';
                }
            }
        }
        // String.prototype.truncate = function(n) {
        //     if (n <= 3) {
        //         return ".".repeat(n);
        //     }
        //     if (this.toString().length <= n) {
        //         return this.toString();
        //     } else {
        //         let lastIndex = this.toString().substr(0, n - 3).lastIndexOf(" ");
        //         if (lastIndex != -1) {
        //             return this.toString().substr(0, lastIndex) + "...";
        //         } else {
        //             return this.toString().substr(0, n - 3) + "...";
        //         }
        //     }
        // };
    String.format = function(str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;
    }



})();




let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
// str = str.ensureEnd('hello ');
console.log(str);
str = str.isEmpty();
console.log(str);
console.log(str);
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');
console.log(str);