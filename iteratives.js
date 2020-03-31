// Counting Sheep
// Complexity: O(n)
function countSheep(num) {

  for(let i = num; i >= 0; i--) {
    if(i === 0) {
      console.log('All Sheep have jumped over the fence');
    } else {
      console.log(`${i}: Another sheep jumps over the fence`);
    }
  }
}

console.log('');
console.log('-------------- Counting Sheep --------------');
countSheep(5);

// Power Calculator
// Complexity: O(n)
function powerCalculator(base, exp) {
  if(exp < 0) {
    return 'Exponent must be greater than or equal to 0'
  }

  if(exp === 0) {
    return 1;
  }

  let result = 1;

  for(let i = 0; i < exp; i++) {
    result = result * base;
  }

  return result;
}

console.log('');
console.log('-------------- Power Calculator --------------');
console.log(powerCalculator(15,2))

// Reverse String
// Complexity: O(n)
function reverseString(str) {
  let result = '';
  for( let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log('');
console.log('-------------- Reverse String --------------');
console.log(reverseString('hello'));

// nth Triangular Number
// Complexity: O(n)
function nthTriangularNumber(num) {
  let triangle = 0;
  for (let i = 0; i <= num; i++){
    triangle += i;
  }
  return triangle 
}

console.log('');
console.log('-------------- Triangular Number --------------');
console.log(nthTriangularNumber(9));

// String Splitter
// Complexity: O(n)
function split(str, sep) {
  let result = [];
  for(let i = 0; i < str.length; i++) {
    let char = str[i];
    if(char === sep) {
      result.push(str.substring(0, i));
      str = str.substring(i + 1);
    }
  }

  return result;
}

console.log('');
console.log('-------------- Split String --------------');
console.log(split('2/20/2020/', '/'));

// Fibonacci
// Complexity: O(n)
function fib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

      if (i === 1) {
          result.push(1);
      }
      else if (i === 2) {
          result.push(1);
      }
      else {
          result.push(result[i - 2] + result[i - 3]);
      }
  }
  return result;
}

console.log('');
console.log('-------------- Fibonacci Sequence --------------');
console.log(fib(7));

// Factorial
// Complexity: O(n)
function factorial(num) {
  let result = 1;
  for(let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

console.log('');
console.log('-------------- Factorial --------------');
console.log(factorial(5));