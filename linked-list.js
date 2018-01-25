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
        console.log('Inside the loop and before assignment', currNode.next);
        currNode = currNode.next;
      }
      currNode.next = new _Node(newValue, currNode.next);
    }
  }

//   insertAt(node, location){
//     if(this.head === null) {
//       this.insertFirst(node);
//     } else {
//       let tempNode = this.head;
//       while(tempNode.next !== null && tempNode.value !== node.next.value) {     
//         tempNode = tempNode.next;
//       }                                      
//       while(E.next !== null && E.value !== 'E') {     
//         tempNode = tempNode.next;
//       }

//       tempNode.next = new _Node(node, tempNode.next);

//     }
//   }


}

function main(){

  let sll = new LinkedList();
  sll.insertFirst('Apollo');
  sll.insertLast('Boomer');
  sll.insertLast('Helo');
  sll.insertLast('Husker');
  sll.insertLast('Starbuck');
  sll.insertFirst('Tauhida');
  sll.insertBefore('Boomer', 'nicci');



  console.log(JSON.stringify(sll, null, 3));

}


main();
