var userName = prompt("Enter your Name");
console.log(userName);



var userGender = prompt(" What's your gender If it is a male, write “M”, and if it is a female, write “F” ");
  console.log(userGender);

var userAge = prompt(" Enter your Age ");
userAge <=0 ? ("Be careful, you entered your age incorrectly, as you entered it less than 0") : alert ("Long life");

if (userGender=='M')
alert (" welcome Mr "+ userName +"to our website");
else
alert (" welcome Ms "+ userName +"to our website");