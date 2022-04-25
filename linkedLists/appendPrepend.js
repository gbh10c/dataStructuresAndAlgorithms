// CAN USE THIS CLASS TO REPLACE NEW NODE IN THE NEXT CLASS
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// 
// REPLACE THE newNode CODE BELOW WITH
// const newNode = new Node(value);



class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode; //points the current tail to the new node
    this.tail = newNode; //assigns the new node to be the tail, it is pointed to by the old tail
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head; //points to current head
    this.head = newNode; //becomes new head, but still points to second item in the list (previous head.)
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);