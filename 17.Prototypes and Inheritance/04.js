function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;

        }

    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            let result = super.toString();
            return result.substring(0, result.length - 1) + `, subject: ${this.subject})`;;
        }
    }
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            let result = super.toString();
            return result.substring(0, result.length - 1) + `, course: ${this.course})`;;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

function extendProrotype(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`
    };

}



let obj = personAndTeacher();
let Student = obj.Student;
let student = new Student('Kiro', 'koko@abv.bg', 10);
// console.log(student);
// student.name = 'Micho'
// console.log(student);
// student.name = 'Byilio';
console.log(student.toString());
let Teacher = obj.Teacher;
let t = new Teacher('Stoqn', 'koko@abv.bg', 'Bio');
console.log(t.toString());
let Person = obj.Person
let p = new Person("Pesho", "email@hit.bg");
extendProrotype(Person)
console.log(p.toSpeciesString());
extendProrotype(Teacher)
console.log(t.toSpeciesString());