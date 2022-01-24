'use strict'
const numbers = [];
let item;
const lenghtArray = 10;

//заполнение массива рандомными числами
for(let i = 1; i <= lenghtArray; i++){
    item =Math.floor(Math.random() * 10); 
    numbers.push(item)
}
console.log(numbers);

//удаление с конца массива
const lastItems = numbers.splice(-1);
console.log(lastItems);

//добавление в конец массива
numbers.push(0)
console.log(numbers);

//добвление в начало массива
numbers.unshift(0);
console.log(numbers);

//длина массива
console.log(numbers.length)

console.group('Вывести элементы с четными индексами')
console.log(numbers);
for(let i = 0; i < numbers.length; i++){
    if(i % 2 === 0){
        console.log(numbers[i]);
    }
}
console.groupEnd();

console.group('Вывести только четные элементы')
console.log(numbers);
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i]);
    }
}
console.groupEnd();

console.group('Вывести индексы нулевых элементов (элемент равен нулю)')
console.log(numbers);
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === 0){
        console.log(i);
    }
}
console.groupEnd();

console.group('Подсчитать количество нулевых элементов.')
console.log(numbers);
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === 0){
        sum++;
    }
}
console.log(sum);
console.groupEnd();


console.group('Получить новый массив из заданного, который будет содержать только ненулевые числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).');

const arr1 = [-1, 5, 0, 9, -10];
const positivArray = (item) => item != 0 ? true : false;
const arr2 = arr1.filter(positivArray);
console.log(arr2);

console.groupEnd();


console.group('Получить новый массив из заданного, который будет содержать все элементы исходного, возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).');

const squaredArray = (item) => item**2;
let arr3 = arr1.map(squaredArray);
console.log(arr3);

console.groupEnd();



console.group('Проверить, являются ли все элементы массива четными числами (* или простыми числами)');

const oddArray = [1, 3, 34, 12, 1];
const evenArray = [2, 6, 10, 12, 8]
const isEvenNumber = function(item){
    return item % 2 === 0;
}
console.log(evenArray.every(isEvenNumber));

console.groupEnd();


console.group('Проверить, есть ли в массиве хоть один отрицательный элемент');

console.log(arr1);
const isNegativeNumber = (item) => item < 0;
console.log(arr1.some(isNegativeNumber));

console.groupEnd();


console.group(' Вывести элементы массива, возведенные в куб');

console.log(arr1);
const numbersСubed = (item) => console.log(item**3);
arr1.forEach(numbersСubed);

console.groupEnd();



/**************************************************/

const MyArray = function() {
  this.length = 0;
  for(let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
  this.length = arguments.length;
}

MyArray.prototype = {
  shift() {
    if (this.length === 0) {return undefined;}
      const shiftElement = this[0];
      delete this[0];
            
      for(let i = 1; i < this.length; i++) {
        let j = this[i]
        this[i - 1] = j;
      }
      
      delete this[this.length - 1]
      this.length--;
    
      return shiftElement;
    },
  some(item) {
    for(let i = 0; i <= this.length; i++){
      if(this[i] === item){return true;}
    }
    return false
  }
}

const arrShiftNumbers = new MyArray(2,12,45,12,1);
console.log(arrShiftNumbers)
console.log(arrShiftNumbers.shift())
console.log(arrShiftNumbers)


const arrSomeNumbers = new MyArray(1, 45, 123, 1, 2);
console.log(arrSomeNumbers.some(2))












