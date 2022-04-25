class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    newNode.prev = this.tail; //connects newNode backwards pointer with current tail
    this.tail.next = newNode; 
    this.tail = newNode; 
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    newNode.next = this.head; 
    this.head.prev = newNode; //connects current head's backwards pointer to newNode
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
      next: null,
      prev: null
    };
    const leader = this.traverseToIndex(index-1)
    const follower = leader.next; //will be after inserted node
    leader.next = newNode; //connects forward to newNode
    newNode.prev = leader; //connects newNode back to leader
    newNode.next = follower; //connects newNode forward to follower
    follower.prev = newNode; //connects follower back to newNode
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
  // THIS WAS DONE WITHOUT A SOLUTION - DOUBLE CHECK IF REFERRING BACK
  remove(index) {
    //check params
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    const follower = unwantedNode.next;
    leader.next = follower; 
    follower.prev = leader;
    this.length--;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(3);
// console.log(myLinkedList);
console.log(myLinkedList.printList());