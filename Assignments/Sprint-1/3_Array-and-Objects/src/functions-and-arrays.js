// Progression #1: Greatest of the two numbers

function greatestOfTwoNumbers() {
  var num1 = parseInt(document.getElementById("n1").value);
  var num2 = parseInt(document.getElementById("n2").value);
  if (num1 > num2) document.getElementById("max").innerText = num1;
  else document.getElementById("max").innerText = num2;
}
console.log("Progression 1 : " + greatestOfTwoNumbers());
console.log(" ");

// Progression #2: The lengthy word

function findScaryWord() {
  const arr = [
    "mystery",
    "brother",
    "aviator",
    "crocodile",
    "pearl",
    "orchard",
    "crackpot",
  ];
  document.getElementById("lengthy").innerText = arr.reduce(
    (matrix, b) => (matrix.length < b.length ? b : matrix),
    " "
  );
}

// Progression #3: Net Price

function netPrice() {
  const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  let net_price = 0;
  for (let i = 0; i < numbers.length; i++) {
    net_price += numbers[i];
  }
  document.getElementById("net").innerText = net_price;
  console.log("Progression 3 : " + net_price);
  console.log(" ");
}

// Progression #4: Calculate the average

// Progression 4.1: Array of numbers
function midPointOfLevels() {
  const numbers = [2, 6, 9, 10, 7, 4, 1, 9];
  let total = 0;
  len = numbers.length;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  let average = total / len;
  console.log("Progression 4.1 : " + average);
  console.log(" ");
  document.getElementById("avg").innerText = average;
}

// Progression 4.2: Array of strings

function averageWordLength() {
  const arr = [
    "seat",
    "correspond",
    "linen",
    "motif",
    "hole",
    "smell",
    "smart",
    "chaos",
    "fuel",
    "palace",
  ];
  var total_len = 0;
  for (var i = 0; i < arr.length; i++) {
    total_len += arr[i].length;
  }
  let avg_str = total_len / arr.length;
  if (avg_str - Math.floor(avg_str) > 0.5) avg_str += 1;
  else avg_str = Math.floor(avg_str);
  const avg_string = arr[avg_str];
  document.getElementById("avg-str").innerText = avg_string;
  console.log("Progression 4.2 : " + avg_string);
  console.log(" ");
}

// Progression #5: Unique arrays
function uniqueArray() {
  const wordsUnique = [
    " bread ",
    " jam ",
    " milk ",
    " egg ",
    " flour ",
    " oil ",
    " rice",
    " coffee powder ",
    " sugar ",
    " salt ",
    " egg ",
    " flour ",
  ];

  const uniqueArray1 = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  const uniques = wordsUnique.filter(uniqueArray1);

  document.getElementById("unique").innerText = uniques;
  console.log("Progression 5 : " + uniques);
  console.log(" ");
}

// Progression #6: Find elements
function searchElement() {
  const strArray = [
    "machine",
    "subset",
    "trouble",
    "starting",
    "matter",
    "eating",
    "truth",
    "disobedience",
  ];
  let str = document.getElementById("str").value;
  for (var j = 0; j < strArray.length; j++) {
    if (strArray[j].match(str)) {
      document.getElementById("found").innerText = "True";
      console.log("Progression 6: " + "True");
      console.log(" ");
      break;
    } else {
      document.getElementById("found").innerText = "False";
      console.log("Progression 6: " + "False");
      console.log(" ");
    }
  }
}

// Progression #7: Count repetition
function howManyTimesElementRepeated() {
  const wordsCount = [
    "machine",
    "matter",
    "subset",
    "trouble",
    "starting",
    "matter",
    "eating",
    "matter",
    "truth",
    "disobedience",
    "matter",
  ];
  const wordToCheck = document.getElementById("wrd").value;

  countTimes = wordsCount.reduce((count, wordsCount_curr) => {
    if (wordsCount_curr == wordToCheck) count++;
    return count;
  }, 0);
  document.getElementById("freq").innerText = countTimes;
  console.log("Progression 7: Occurance of word 'matter' : " + countTimes);
  console.log(" ");
}

// Progression #8: Bonus
function maximumProduct() {
  const matrix = [
    [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
  ];

  function maximumProduct(arr, n, m, k) {
    let max = 0,
      result;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (j - 3 >= 0) {
          result = arr[i][j] * arr[i][j - 1] * arr[i][j - 2] * arr[i][j - 3];
          if (max < result) max = result;
        }

        if (i - 3 >= 0) {
          result = arr[i][j] * arr[i - 1][j] * arr[i - 2][j] * arr[i - 3][j];

          if (max < result) max = result;
        }
      }
    }

    return max;
  }
  let max_pro = maximumProduct(
    matrix,
    matrix.length,
    matrix[0].length,
    (k = 4)
  );
  document.getElementById("maxP").innerText = max_pro;
  console.log("Progression 8 (Vertically and Horizontally): " + max_pro);
  console.log(" ");
}

//Product of diagonals(bonus 8.1)
function maximumProductOfDiagonals() {
  const matrix = [
    [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
  ];

  function maximumProductOfDiagonals(arr, n, m, k) {
    let max = 0,
      result;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // check the maximum product in
        // diagonal (going through down - right)
        if (i - 3 >= 0 && j - 3 >= 0) {
          result =
            arr[i][j] *
            arr[i - 1][j - 1] *
            arr[i - 2][j - 2] *
            arr[i - 3][j - 3];

          if (max < result) max = result;
        }

        // check the maximum product in
        // diagonal (going through up - right)
        if (i - 3 >= 0 && j - 1 <= 0) {
          result =
            arr[i][j] *
            arr[i - 1][j + 1] *
            arr[i - 2][j + 2] *
            arr[i - 3][j + 3];

          if (max < result) max = result;
        }
      }
    }

    return max;
  }

  let maxD = maximumProductOfDiagonals(
    matrix,
    matrix.length,
    matrix[0].length,
    (k = 4)
  );
  document.getElementById("maxD").innerText = maxD;
  console.log("Progression 8.1 (Diagonally): " + maxD);
}
