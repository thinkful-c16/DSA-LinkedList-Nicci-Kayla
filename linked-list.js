'use strict';
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(node){
    this.head = new _Node(node, this.head);  
  }

  insertLast(node){
    if(this.head === null) {
      this.insertFirst(node);
    }else {
      let tempNode = this.head;
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(node, null);

    }
  }

  //'Boomer'
  //add a check for no value found
  insertBefore(locationValue, newValue) {
    if (!this.head) {
      this.insertFirst(newValue);
    } else {
      let currNode = this.head;
      //we are comparing the location value (ITS THE KEY!) in the node
      while(currNode !== null && currNode.next.value !== locationValue) {
        // console.log('Inside the loop and before assignment', currNode.next);
        currNode = currNode.next;
      }
      currNode.next = new _Node(newValue, currNode.next);
    }
  }

  insertAfter(locationValue, newValue) {
    if (!this.head) {
      this.insertFirst(newValue);
    } else {
      let currNode = this.head;
      while(currNode !== null && currNode.value !== locationValue) {
        currNode = currNode.next;
      }
      currNode.next = new _Node(newValue, currNode.next);
    //set the new next's pointer to nicci
    //apollo's next pointer to new node

    }
  }

  insertAt(value, nPosition){
    if(this.head === null) {
      this.insertFirst(value);
    } else {
      let currNode = this.head;
      let nodeCount = 1;
      while((currNode !== null) && (nodeCount !== nPosition - 1)) {
        currNode = currNode.next;
        nodeCount++;
      }
      currNode.next = new _Node(value, currNode.next);
    }
  }

  remove(value) {
    if(!this.head) {
      return null;
    }

    console.log('head', this.head);
    console.log('value', value);
    if(this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while((currNode !== null) && (currNode.value !== value)){
      prevNode = currNode;
      currNode = currNode.next;
    }

    if(currNode === null) {
      console.log('Value not found');
      return; 
    }

    prevNode.next = currNode.next;
  }


}

function main(){

  let sll = new LinkedList();
  sll.insertFirst('Apollo');
  sll.insertLast('Boomer');
  sll.insertLast('Helo');
  sll.insertLast('Husker');
  sll.insertLast('Starbuck');
  sll.insertFirst('Tauhida');
  sll.insertBefore('Boomer', 'Athena');
  sll.insertAfter('Helo', 'Hotdog');
  sll.insertAt('Kat', 3);
  sll.remove('Tauhida');

  



  console.log(JSON.stringify(sll, null, 3));

}


main();
