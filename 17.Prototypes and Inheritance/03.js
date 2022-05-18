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
let obj = personAndTeacher();
let s = obj.Student;
let student = new s('Kiro', 'koko@abv.bg', 10);
// console.log(student);
// student.name = 'Micho'
// console.log(student);
// student.name = 'Byilio';
console.log(student.toString());
let t = obj.Teacher;
let teacher = new t('Stoqn', 'koko@abv.bg', 'Bio');
console.log(teacher.toString());