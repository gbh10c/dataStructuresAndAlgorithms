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
    this.tail.next = newNode; 
    this.tail = newNode; 
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head; 
    this.head = newNode; 
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    const newNode = {
      value: value,
      next: null
    };
    const leader = this.traverseToIndex(index-1)
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }
  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    //check params
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
  }
  reverse() {
    if (!this.head.next) {
      return this; //or this.head --> there is only one item in this list
    }
    let first = this.head; // creating 'first' variable
    this.tail = this.head; //assigning the new tail of the list
    let second = first.next; //building the list backwards, moving from the new tail to what will be come the beginning of the list
    while (second) { //once 'second' is the head, there's no more 2nd
      const temp = second.next; //placeholder pointing to next item
      second.next = first; //next item becomes 'first' in loop (3rd)
      first = second; // assignment changes to set up 'temp'
      second = temp; //moved to temp in order to get second.next (4th)
    }
    this.head.next = null; //after loop is complete, head pointer removed.
    this.head = first; //assigns the head (w/ null pointer) to complete reversal
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
// myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());

// original [ 1, 10, 99, 5, 16, 88 ]
// reversed [ 88, 16, 5, 99, 10, 1 ]