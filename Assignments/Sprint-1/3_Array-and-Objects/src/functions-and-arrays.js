

// Progression #1: Greatest of the two numbers

function greatestOfTwoNumbers(x, y){	
  if (x==y){
    return "Both are same";
  }
  if(x>y)
    return x;
  else
    return y;
    
}
console.log("Progression 1 : "+ greatestOfTwoNumbers(45, 60));
console.log(" ");




// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

console.log("Progression 2 : "+ findScaryWord(words));
console.log(" ");

function findScaryWord(arr) {
  return arr.reduce((matrix, b) => matrix.length < b.length ? b : matrix, " ");
}





// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
console.log("Progression 3 : "+ netPrice(numbers));
console.log(" ");


function netPrice(numbers){

  let net_price=0;
  for(let i=0;i<numbers.length;i++){
    net_price+=numbers[i];
  }
  return net_price;
 }





// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
console.log("Progression 4.1 : "+ midPointOfLevels(numbersAvg));
console.log(" ");

function midPointOfLevels(numbers){

  let total=0;
  len=numbers.length;
  for(let i=0;i<numbers.length;i++){
    total+=numbers[i];
  }

  return total/len;
 }




// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
console.log("Progression 4.2 : "+ averageWordLength(wordsArr));
console.log(" ");

function averageWordLength(arr){

  var totallen = 0;
  for(var i = 0; i < arr.length; i++){
    totallen+=arr[i].length;
  }
  return totallen/arr.length;
 }




// Progression #5: Unique arrays
const wordsUnique = [' bread ' , ' jam ' , ' milk ' , ' egg ' , ' flour ' , ' oil ' , ' rice' , ' coffee powder ' , ' sugar ' , ' salt ' , ' egg ' , ' flour '];
const uniqueArray = (value, index, self) => {
  return self.indexOf(value) === index;
}
const uniques =wordsUnique.filter(uniqueArray)
console.log("Progression 5 : "+ uniques)
console.log(" ");




// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement (str, strArray) {
  for (var j=0; j<strArray.length; j++) {
      if (strArray[j].match(str)) return true;
  }
  return false;
}
console.log("Progression 6: "+ searchElement('eating',wordsFind));
console.log(" ");





// Progression #7: Count repetition
const wordsCount = ['machine','matter','subset','trouble','starting','matter','eating','matter','truth','disobedience','matter'];

const wordToCheck = "matter";

howManyTimesElementRepeated=wordsCount.reduce((count,wordsCountcurr) => {
    if(wordsCountcurr == wordToCheck)
       count++;
    return count;
},0);
console.log("Progression 7: Occurance of word 'matter' : "+ howManyTimesElementRepeated);
console.log(" ");





// Progression #8: Bonus

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
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];


function maximumProduct(arr,n,m,k)
{
  let max = 0, result;

     
      for (let i = 0; i < n; i++)
      {
          
          for (let j = 0; j < n; j++)
          {
         
              if ((j - 3) >= 0)
              {
                  result = arr[i][j] * arr[i][j - 1]
                          * arr[i][j - 2]
                          * arr[i][j - 3];
                  if (max < result)
                      max = result;
              }

              
              if ((i - 3) >= 0)
              {
                  result = arr[i][j] * arr[i - 1][j]
                          * arr[i - 2][j]
                          * arr[i - 3][j];

                  if (max < result)
                      max = result;
              }

              
          }
      }

      return max;

}

let maxpro = maximumProduct(matrix,matrix.length,matrix[0].length, k=4);
console.log("Progression 8 (Vertically and Horizontally): "+ maxpro);
console.log(" ");

//Product of diagonals(bonus 8.1)
function maximumProductOfDiagonals(arr,n,m,k)
	{
		let max = 0, result;
 
       
        for (let i = 0; i < n; i++)
        {
            
            for (let j = 0; j < n; j++)
            {
           
 
                 // check the maximum product in
                // diagonal (going through down - right)
                if ((i - 3) >= 0 && (j - 3) >= 0)
                {
                    result = arr[i][j] * arr[i - 1][j - 1]
                            * arr[i - 2][j - 2]
                            * arr[i - 3][j - 3];
 
                    if (max < result)
                        max = result;
                }
 
                // check the maximum product in
                // diagonal (going through up - right)
                if ((i - 3) >= 0 && (j - 1) <= 0)
                {
                result = arr[i][j] * arr[i - 1][j + 1]
                            * arr[i - 2][j + 2]
                            * arr[i - 3][j + 3];
 
                    if (max < result)
                        max = result;
                }
            }
        }
 
        return max;

	}

console.log("Progression 8.1 (Diagonally): "+ maximumProductOfDiagonals(matrix,matrix.length,matrix[0].length, k=4));