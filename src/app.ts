// Namespaces

/// <reference path="Person.ts" />
/// <reference path="Car.ts" />

console.log(Person.getFullName('Denis', 'John'));

console.log(Car.getCarDetails('Auris', 'Toyota', 'Japan'));

// Literal types

let click: 'click';

click = 'click';

click = 'dbclick';

let mouseEvent: 'click' | 'mouseup' | 'mousedown';

mouseEvent = 'click'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'dbclick';

type mouseEvent = 'click' | 'mouseup' | 'mousedown';

let mouseEvent2: mouseEvent;

mouseEvent2 = 'click'; // valid
mouseEvent2 = 'mouse';

// Function Return Types and Void

function sum(numb1: number, numb2: number): number {
  return numb1 + numb2;
}

function voidReturn(): void {
  return;
}

function undefinedReturn(): undefined {
  return;
}

// Function Types

const combine = (): void => {}

let combineValue: Function;

combineValue = 2;

combineValue = combine;

// Function Types and Callbacks

function fullNameHandler (fName: string, lName: string, cb: (fullName: string) => void) {
  const result = fName + ' ' + lName;
  cb(result);
}

fullNameHandler('Denis', 'John', result => {
  console.log(result);
})

// The unknown type

let userInput: unknown;

userInput = 'string';
userInput = 1;

let userName: string;

if (typeof userInput === 'string') {
  userName = userInput;
}

// The unknown type

let userInput: unknown;

userInput = 'string';
userInput = 1;

let userName: string;

if (typeof userInput === 'string') {
  userName = userInput;
}

// The never type

function generateError(message: string): never {
  throw { message: message }
}

// generateError('Error message');

// Generics

const lastElement = <T>(array: T[]): T => {
  return array[array.length - 1];
}

const lastNumber = lastElement([1, 2, 3]);

console.log(lastNumber);

const lastString = lastElement<string>(['1', '2', '3']);

console.log(lastString);


// Namespaces

/// <reference path="Person.ts" />
/// <reference path="Car.ts" />

console.log(Person.getFullName('Denis', 'John'));

console.log(Car.getCarDetails('Auris', 'Toyota', 'Japan'));

