class Node {

  constructor (value){
      const node = {
      value: value,
      next: null
    }
    return node;
  }
}

class SinglyLinkedList {

  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node; 
    this.length ++;
  }
  
  prepend(value){
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length ++;
  }

  traverseToIndex (index){

    let counter = 0;
    let currNode = this.head;

    while(counter != index){
      currNode = currNode.next;
      counter++;
    } 
    return currNode;
  }

  insert(index, value){
    const node = new Node(value);
  
    let leader = {};
    let holdingPointer = {};

    if (index === 0){
      this.prepend(value);
    }

    else if (index > this.length){
      this.append(value);
    }

    else{

      leader = this.traverseToIndex(index - 1);
      holdingPointer = leader.next;
      leader.next = node;
      node.next = holdingPointer;

      this.length ++;
    }

  }

  remove(index){

    let leader = {};
    let unwantedNode = {};

    if(index === 0){
      this.head = this.head.next;
      
    }

    else {
      if(index >= this.length){
        leader = this.traverseToIndex(this.length - 2);
      }
      else{
        leader = this.traverseToIndex(index - 1);
      }
      unwantedNode = leader.next;
      leader.next = unwantedNode.next;
    }
    this.length--;
  }

  reverse(){

    if(!this.head.next){
      return this.head;
    }

    // At the beginning, we redefine the tail to be the head node
    // This reversing algorithm is designed so that the 'first & 'second' nodes keep 
    //moving along the list until every node is pointing to the previous node not the next
    //Once no more second node exists, that means the 'first' node has become the last node element
    // At this moment, the head node is assigned the 'first' node (which is the last after the iteration)
    
    let first = this.head;
    this.tail = this.head;
    
    let second = first.next;
    while(second){
      const temp = second.next;
      second.next = first;
      
      first = second;
      second = temp;
    }
    this.tail.next = null;
    this.head = first;

  }
  printList(){
    const array = [];
    let currNode = this.head;
    while(currNode != null){
      array.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(array);
  }

}

class DoublyLinkedList {

  constructor(value){
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const node = new Node(value);
    node.prev = this.tail;
    this.tail.next = node;
    
    
    this.tail = node; 
    this.length ++;
  }
  
  prepend(value){
    const node = new Node(value);
    node.next = this.head;
    this.head.prev = node;
    
    this.head = node;
    this.length ++;
  }

  traverseToIndex (index){

    let counter = 0;
    let currNode = this.head;

    while(counter != index){
      currNode = currNode.next;
      counter++;
    } 
    return currNode;
  }

  insert(index, value){
    const node = new Node(value);
  
    let leader = {};
    let follower = {};

    if (index === 0){
      this.prepend(value);
    }

    else if (index > this.length){
      this.append(value);
    }

    else{

      leader = this.traverseToIndex(index - 1);
      follower = leader.next;
      
      leader.next = node;
      node.prev = leader;
      node.next = follower;
      follower.prev = node;

      this.length ++;
    }

  }

  remove(index){

    let leader = {};
    let unwantedNode = {};

    if(index === 0){
      this.head = this.head.next;
      
    }

    else {
      if(index >= this.length){
        leader = this.traverseToIndex(this.length - 2);
      }
      else{
        leader = this.traverseToIndex(index - 1);
      }
      unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      unwantedNode.next.prev = leader;
    }
    this.length--;
  }

  printList(){
    const array = [];
    let currNode = this.head;
    while(currNode != null){
      array.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(array);
  }

}


// Calling code starts from here...

let myLinkedList = new SinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.append(7);
myLinkedList.append(8);
myLinkedList.append(9);

myLinkedList.reverse();

console.log(myLinkedList.printList());

