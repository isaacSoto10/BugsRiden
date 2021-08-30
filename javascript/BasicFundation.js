//get 1 to 255
/*
function onetoTwoFifty(){
    arr= [];
    for (let i =0 ; i< 255; i++){
        arr[i]= i
    }
    console.log(arr)
}
onetoTwoFifty()

//get even 1000

function evenNumbers(){
    let arr = [];
    for (let i= 0; i<1000;i++){
        
        if (i % 2 === 0){
            arr[i] = i
        } 
    }
    console.log(arr)
}
evenNumbers()
*/
//sum odd 5000
/*function sumOdd(){
    let arr = [];
    for (let i= 0; i<1000;i++){
        
        if (i % 3 == 0){
            console.log(arr);
            arr[i] = i + arr;
        } 
    }
    console.log(arr);
}

sumOdd();


const iterateAnArray = (arr) => {
    const sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    },0);

    return sum;
};

const findMax = (arr) => {
    let max = 0;
    for (let i=0; i<arr.length; i++){
        max = Math.max(max, arr[i]);
    };
    return max;
};

// Q6

const findAvg = (arr) => {
    const sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    },0);

    return sum / arr.length;
};

// Q7

const arrOdd = () => {
    const arr = [];
    for (let i=1; i<=50; i++){
        if(i%2 === 1){
            arr.push(i);
        };
    };
    return arr;
};

// Q8

const greaterThanY = (arr, Y) => {
    counter = 0;
    for (let i=0; i<arr.length; i++){
        if(arr[i] > Y) counter++;
    };
    return counter;
};

// Q9 

const squares = (arr) => {
    for(let i=0; i<arr.length; i++){
        arr[i] *= arr[i];
    };
    return arr;
};

// Q10

const negatives = (arr) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0) arr[i] = 0;
    };
    return arr;
};

// Q11

const maxMinAvg = (arr) => {
    let max = 0, min = arr[0];
    const answer = [];
    // max
    for(let i=0; i<arr.length; i++){
        max = Math.max(max, arr[i]);
    };
    answer.push(max);
    // min
    for(let i=0; i<arr.length; i++){
        min = Math.min(min, arr[i]);
    };
    answer.push(min);
    // avg
    const sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    },0);
    answer.push(sum / arr.length);

    return answer;
};

// Q12
const swapValues = (arr) => {

    const swap = (arr, swapIndex, currentIndex) => {
        let temp = arr[currentIndex];
        arr[currentIndex] = arr[swapIndex];
        arr[swapIndex] = temp;
    }; 
    swap(arr, arr.length-1, 0);
    return arr;
};

// Q13
const numberToString = (arr) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0) arr[i] = 'Dojo';
    };
    return arr;
};

console.log(numberToString([-1,-3,2]))
*/





