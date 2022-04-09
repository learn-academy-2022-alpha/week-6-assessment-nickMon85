// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// ● keyValue › returns an array with a sentence about each person with their name capitalized

// ReferenceError: keyValue is not defined

//   26 |   let result = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
//   27 |   it("returns an array with a sentence about each person with their name capitalized", () => {
// > 28 |     expect(keyValue(people)).toEqual(result)
//      |     ^
//   29 |   })
//   30 | })
//   31 |

//   at Object.<anonymous> (code-challenges.test.js:28:5)

// Test Suites: 1 failed, 1 total




//1.) create function keyValue ()


describe("keyValue", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  let result = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  it("returns an array with a sentence about each person with their name capitalized", () => {
    expect(keyValue(people)).toEqual(result)
  })
})

const keyValue = (obj)=>{
    
    let op = obj.map(({name, occupation}) => {
      let str1 = `${name}`
      let splitStr = str1.split(" ")
       let newStr1 = splitStr.map(item=>item.charAt(0).toUpperCase()+ item.substring(1).toLowerCase());
       let str2 = newStr1.join(" ")
      let newStr = str2 + " is "+ `${occupation}`+"."
      
        return newStr
    })
    return op


}
// Test Suites: 1 passed, 1 total
//1.Takes array of objects 
//  3objects
//all 3 have 2key/value pairs
//2.Capitalizes first letter of both words in the value
//3.convert the key/value into literals
// add "is"between both literals
// add "period" concat
// 
// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// create a function remaindThree
describe("remaindThree", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(remaindThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remaindThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
//create a function takes array in mixed data
//output:remainders of the number when divided by 3.
//separate string & boolean values
//Divide numbers byn 3 to
//Return- Only Remainders using modulus

const remaindThree =(arr)=>{
  let numerArr =arr.filter(value=>{
    return typeof value === "number"  
  })
   return numerArr.map(value =>{
   return value %3 
  })
  
  
}
  

//1.Create a function 
//2. Separate string and boolean values
//3. Divide numbers by 3
//4. Return Only Remainders

//Come back to can't figure out




// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
// creat function cubeSum function
// ● cubeSum › returns the sum of all the numbers cubed

//     ReferenceError: cubeSum is not defined

//       119 |   // Expected output: 1125
//       120 |   it("returns the sum of all the numbers cubed", () => {

describe("cubeSum", () => {
  const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125
  it("returns the sum of all the numbers cubed", () => {
    expect(cubeSum(cubeAndSum1)).toEqual(99)
    expect(cubeSum(cubeAndSum2)).toEqual(1125)
  })
})

const cubeSum =(arr)=>{
  //cube every number!
 let newCube = arr.map(function(e){
   return e*e*e
 })
 //Added the sum of the cubed numbers
 let sum = newCube.reduce((partialSum,a)=> partialSum + a,0);
 return sum
}

//1)creat a function takes array of numbers and returns
//output sum of all numbers cubeAndSum2
//1.Cube every number in array and
//2. add the sum of the cubed numbers

// b) Create the function that makes the test pass.
