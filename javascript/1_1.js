//push Front
let arr= [1,3,5,7,9]
let item = 2
for (var i = arr.length - 1; i >=0; i--) {
         arr[i +1] = arr[i];
      }
      arr[0] = item;
console.log(arr)

//Pop Front
for(let i=0; i<1; i++){
  let arr= [1,3,5,7,9]
  console.log(arr[0])
  arr[0] = arr.pop()
}

//insertAt


var arr = [1, 2, 3];
for(let i = arr.length; i > 1; i--){
    arr[i] = arr[i - 1];
    //console.log(arr);
}
arr[1] = 4;
console.log(arr);


//Remove at
var arr = [1, 2, 3];
for(let i = arr.length - 1; i < arr.length; i++){
    arr[i - 1] = arr[i]
}
arr.length--
console.log(arr);


//Swap pairs



//
























//count positives
/*function positives(arr){

  let count = 0;

  for(let i= 0; i< arr.length;i++){
  
  if(arr[i] > 0){
    count++;
  }
  arr[arr.length -1] = count;
  console.log(arr);

}
}
*/

// swap
/*
const swapPairs = (arr) => {
  let temp;
  for(let i=0; i<arr.length; i++){
      if(arr[i+1]){
          temp = arr[i];
          arr[i]= arr[i+1];
          arr[i+1] = temp;
      }
      i+=1;
  };
  return arr;
};


// this is the las one and its not working

let arr = [1, 1, 2, 3, 4, 4, 5];
let temp = [];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    
    temp[i] = arr[i];
    
    if (arr[i] !== temp[i]){
        console.log(arr);
}
}
*/