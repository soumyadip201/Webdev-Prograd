// Progression 1
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

let button = document.getElementById("submit");
button.addEventListener("click", checkUserName);
button.addEventListener("click", checkEmail);
button.addEventListener("click", checkPassword);

function checkUserName() {
  let username = document.getElementById("usertext").value;
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //special characters
  if (format.test(username)) {
    alert("You have entered an invalid USERNAME!");
    return false;
  } else if (
    username != "" &&
    username.length > 7 &&
    username.length < 15 &&
    username.indexOf(" ") < 0
  )
    return true;
  else {
    alert("You have entered an invalid USERNAME!");
    return false;
  }
}

// Progression 2
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

function checkEmail() {
  let email = document.getElementById("emailtext").value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true;
  else {
    alert("You have entered an invalid email address!");
    return false;
  }
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

function checkPassword() {
  let password = document.getElementById("passwordtext").value;

  // var alphanumeric = /^[0-9a-zA-Z]+$/;
  // var format1 = /[!@#$%^&*()_]+/;
  // var Uppercase = /^[A-Z]+$/;
  // var number = /^[0-9a-zA-Z]+$/;

  var alphanumeric = /^[0-9a-zA-Z!@#$%^&*()_]+$/;
  var count = 0; //checking number of uppercase in password
  var uppercase = password.toUpperCase();

  for (i = 0, j = 0; i < password.length, j < uppercase.length; i++, j++) {
    if (password[i] == uppercase[j]) count++;
  }

  var count1 = 0; //checking number of special Characters in password
  var spChar = "!@#$%^&*()_";
  for (i = 0; i < password.length; i++)
    for (j = 0; j < spChar.length; j++) if (password[i] == spChar[j]) count1++;

  var count2 = 0;
  var numbers = "0123456789";

  for (i = 0; i < password.length; i++)
    for (j = 0; j < numbers.length; j++)
      if (password[i] == numbers[j]) count2++;

  if (
    alphanumeric.test(password) &&
    password.length > 5 &&
    count2 > 0 &&
    count1 > 0 &&
    count > 0
  )
    return true;
  else {
    alert(
      "You have entered an invalid Password!, password must contain atleast one Uppercase, one number and special characters"
    );
    return false;
  }
}
