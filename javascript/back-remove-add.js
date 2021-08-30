class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    };
};

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }; 
    
    // Add Front
    addFront(val){
        const newNode = new Node(val);
        let savedList;
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        };
        this.length++;
    };
    // Remove Front
    removeFront(){
        if(!this.head) return null;
        if(this.length === 1) this.tail = null;
        this.head = this.head.next;
        this.length--;
    };
    // Front
    front(){
        return this.head.val;
    };
    // Contains
    contains(value){
        let currentNode = this.head;
        while(currentNode.next){
            if(currentNode.val === value){
                return true;
            } else {
                currentNode = currentNode.next;
            };
        };
        return false;
    };
    // Length
    returnLength(){
        return this.length;
    };
    // Display
    display(){
        let counter = 1,string = ``, currentNode = this.head, entireString =``;
        while(currentNode.next){
            string = currentNode.val.toString();
            if(currentNode.next.next === null){
            entireString += `Node ${counter}: ${string}.`;
            } else {
                entireString += `Node ${counter}: ${string}, `;
            }
            currentNode = currentNode.next;
            counter++;
        };
        return entireString;
    };
    // Back
    back(){
        if(!this.tail) return null;
        return this.tail.val;
    };
    // Remove Back
    removeBack(){
        let currentNode = this.head;
        while(currentNode.next){
            if(currentNode.next.next === null){
            this.tail = currentNode;
            this.tail.next = null;
            this.length--;
            return this.head;
            };
            currentNode = currentNode.next;
        };
    };
    // Add back
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = this.tail.next;
        };
        this.length++;
    };
    // Min to Front
   

};

const newList = new SinglyLinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);


//console.log(newList.nodeAmount());


