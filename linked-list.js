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

}

main();

