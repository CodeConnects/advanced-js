// () after a variable or function name, just means to run (or INVOKE) it immediately
// This is called an IIFE (Immediately Invoked Function Expression)
// So if connect more than one set of braces, it will run nested functions immediately:
netsedFunction()()();

// undeclared variables will attach themselves to the global object
// this is bad practice, as it can cause bugs, and can be avoided by using strict mode
// 'use strict' at the top of a file or function will prevent this from happening
// it will also prevent you from using reserved words as variable names
'use strict'
const badFunction = () => {
  badVar = 'bad';
}
badFunction();
console.log(badVar); // ReferenceError: badVar is not defined
// this is good practice, as it will prevent bugs and make your code more secure


