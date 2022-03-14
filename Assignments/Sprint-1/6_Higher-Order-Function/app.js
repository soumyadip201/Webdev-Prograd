// Function #1: Array Slice;
function slice() {
  const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
  var num1 = parseInt(document.getElementById("n1").value);
  var num2 = parseInt(document.getElementById("n2").value);
  var modifiedFood = [];
  for (let i = num1; i < num2; i++) {
    modifiedFood.push(" " + foods[i] + " ");
  }
  document.getElementById("out1").innerText =
    "Modified Food = [" + modifiedFood + "]";
  console.log(modifiedFood);
}

//function  #2: Array Spliceconst
function Addsplice() {
  var foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
  var num1 = parseInt(document.getElementById("n3").value);
  var value = document.getElementById("n4").value;
  var modifiedFood = [];
  for (i = 0; i < num1; i++) {
    modifiedFood.push(" " + foods1[i] + " ");
  }
  modifiedFood.push(value);
  for (; i < foods1.length; i++) {
    modifiedFood.push(" " + foods1[i] + " ");
  }
  document.getElementById("out2").innerText =
    "Modified Food = [" + modifiedFood + "]";
  console.log(foods1);
  return modifiedFood;
}

//Function #3: Filter

function isEven() {
  const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
  function checkEven(num) {
    return num % 2 == 0;
  }
  var res = numberArray.filter(checkEven);
  document.getElementById("out3").innerText =
    "Even Number Array = [" + res + "]";
  return res;
}

//Function #4: Reject
function isPrime() {
  const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
  var not_prime = [];
  for (let i = 0; i < numberArray.length; i++) {
    let j;
    for (j = 2; j < numberArray[i]; j++) {
      if (numberArray[i] % j == 0) {
        break;
      }
    }
    if (j == numberArray[i]) {
      not_prime.push(numberArray[i]);
    }
  }
  document.getElementById("out4").innerText = "Not prime = [" + not_prime + "]";
  return not_prime;
}

//Function #5: Lambda function
function checkEven() {
  const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
  var res = numberArray.filter((value) => value % 2 == 0);
  document.getElementById("out5").innerText =
    "Even Number Array = [" + res + "]";
  return res;
}
//Function #6: Map

function findSquare() {
  const myArray = [11, 34, 20, 5, 53, 16];
  let output = myArray.map(function (ele) {
    return ele * ele;
  });
  document.getElementById("out6").innerText =
    "Square of Array = [" + " " + output + " " + "]";
  return output;
}

//Function #7: Reduce
function multiply() {
  const myArray = [2, 3, 5, 10];
  let mul = myArray.reduce(function (mul, ele) {
    return mul * ele;
  }, 1);
  document.getElementById("out7").innerText = "Multiply Value = " + mul;
  return mul;
}
