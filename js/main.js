//Exercise #1
//Write a function that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order
function softGiftCode(code){
  return code.split('').sort().join('');
}
softGiftCode()//This calls the function


//Exercise 2
//Write a function that returns "true" if passed with a vaild PIN, and "false" if passed an invalid PIN
function validatePIN (pin){
  var pinlen = pin.length;
  var isCorrectLength = (pinlen == 4 || pinlen == 6);
  var hasOnlyNumbers = pin.match(/^\d+$/);

  if (isCorrectLength && hasOnlyNumbers);{
  return true;
}
  return false;
};

//Exercise 3
//Write a function that takes an array of words and returns a single string
function Array(words){
  var arry = [];
  var wordsStr = arry.push(words)
}
//Correct answer
function smash(words){
  return words.join(' ');//Join turns an array into a string
}


//Exercise 4
function errors(code){
  var regex = /^[af
//Correct way of answer the question
function printerError(){
  var regEx = /[a-m]/;
  var err = 0;
  var total = s.length;
  for(i = 0; i < total; i++){
    var arr = s.split('');
    if(!arr[i].match(regEx)){
      err++;
    }
  }
  return err + "/" + total
}
//Exercise 5
//Write a function that accepts a number as an input and then squares each digit in the number
function input(number){
  var inputArray = input.split;
  for (var i = 0; i < inputArray.length; i++){
  }
}
//Exercise 6
//Write a function that returns the smallest interger in an array
function array(num){
  return Math.min.apply(null, num);
}
//Exercise 7
//Write a function that accepts two strings. This function should transform the first string into the second string
function twoString(transfrom){
  var stringOne = "";
  stringOne.replace()

}
