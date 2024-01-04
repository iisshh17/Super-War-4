const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
const slice = (lowerLimit, upperLimit) => {
  let newArray = []
  for(i=lowerLimit; i<upperLimit-1; i++){
    newArray.push(foods[i])
  }
  return newArray
}

// Progression 2:
const spliced = () =>{
  foods.splice(2,0,'noodles','icecream')
  return foods
}


// Progression 3:
const isEven = (number) =>
{return number%2==0? true : false}

const isPrime = (number) =>
{if(number<=1)return false; 
  for(let i=2;i<number;i++) 
    if(number%i==0){return false}; 
    return true }


const checkNumber = (numberArray, operation) =>{
  returnArray = numberArray.filter(num=>operation(num))
  return returnArray
  }



// Progression 4:
const reject = (numberArray) =>
{return numberArray.filter(num=>!isPrime(num))}

const nonPrime = (numberArray) => 
{return reject(numberArray)}

// Progression 5:
const isEvenUsingLambda = (number) => 
number%2==0? true : false

// Progression 6:
const square = (number) => number * number;
const findSquareOfNumbers = (myArray) => myArray.map(square)

// Progression 7:
const multiply = (myArray) => 
{return myArray.reduce((multiplied,number)=>multiplied * number)}

const sumOfSquares = (myArray) => 
{return myArray.map(square).reduce((sum,number)=> sum+number)}