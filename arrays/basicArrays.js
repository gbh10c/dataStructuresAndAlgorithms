const strings = ['a', 'b', 'c', 'd'];
//storing this information sequentially in RAM

strings.push('e'); //O(1) MIGHT be O(n) if array storage needs to be enlarged

strings.pop(); //O(1)

strings.unshift('x'); //O(n)

strings.splice(2, 0, 'blerg'); //O(n)

console.log(strings);