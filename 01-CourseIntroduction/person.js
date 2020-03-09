class Person {
    constructor(name, surname) {
        this._name = name
        this._surname = surname
    }
    
    getFullName() {
        return `${this._name} ${this._surname.toUpperCase()}`
    }

    getInitials() {
        return `${this._name[0]}.${this._surname[0]}.`
    }
}

let JN = new Person('Jan', 'Nowak')
let JE = new Person('Jakub', 'Erazmus')

console.log(JN.getFullName())
console.log(JN.getInitials())
console.log(JE.getFullName())
console.log(JE.getInitials())