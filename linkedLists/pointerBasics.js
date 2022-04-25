// POINTER refers to the same location in memory (obj2 points to obj1)
let obj1 = {a: true};
let obj2 = obj1;
delete obj1; // JavaScript retains the pointer from obj2 to obj1 (even though it's deleted) because it knows that obj2 is referencing obj1
obj1.a = 'boom goes the dynamite';
// obj2 = 'hello' // If obj2 is reassigned, the pointer from obj1 is automatically deleted by JavaScript ('Garbage collecting')
// console.log('1', obj1);
console.log('2', obj2);