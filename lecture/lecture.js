// objects

function fullName() {
    return `${this.firstName} ${this.lastName}`;
}

var headInstructor = {
    firstName: 'Don',
    lastName: 'Burks',
    fullName: fullname
}

var otherInstructor = {
    firstName: 'David',
    lastName: 'Mills',
    fullName: fullName
}

console.log(headInstructor.fullName());
console.log(otherInstructor.fullName());
console.log(fullName());

// replacing values in objexts

function replace(ref) {
    ref = {};
}

function update(ref) {
    ref.key = 'newValue';
}

var a = {
    key:'value',
}

replace(a);
console.log('after replace: ', a);
update(a);
console.log('after update: ', a);

// https://googlechrome.github.io/samples/object-assign-es6/