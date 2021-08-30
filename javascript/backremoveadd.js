// basic node constructor
class Node{
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class SLL{
  constructor(){
      this.head = null;
      this.size = 0;
  }
  back(){
    let runner = this.head;
    while(runner){
        if(runner.next === null){
            return runner.value;
        }
        runner = runner.next;
    }
  }
  removeBack(){
    let runner = this.head;
    while(runner.next.next){
        runner = runner.next;
    }
    runner.next = null;
    return;
  }
  addToEnd(value){
    let runner = this.head;
    while(runner.next){
        runner = runner.next;
    }
    runner.next = new Node(value);
  }
}
