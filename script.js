//1.
let randomNum = Math.floor(Math.random() * 5);
randomNum++;
console.log(randomNum);

// 1b

if (randomNum >= 4) {
  console.log("Greater than or equal to 4");
} else if (randomNum === 2 || randomNum === 3) {
  console.log("Equal to 2 or 3");
} else if ((randomNum = 1)) {
  console.log("Equal to 1");
}

if (randomNum !== 3) {
  console.log("Not equal to 3");
} else {
  console.log("is 3");
}

//1d
if (randomNum !== 3 && randomNum !== 5) {
  console.log("NOT equal to 3 AND NOT equal to 5");
  // console.log("Not equal to 3 and NOT equal to 5");
  //
}

//1e
if (randomNum === 2 || randomNum === 4) {
  console.log("Equal to 4 ");
}

//Bonus

randomNum >= 4
  ? console.log("Greater than or equal to 4")
  : console.log("Less than 4");

// Switch statement takes a parameter/arguement and returns something based on the CASE or the match that the parameter/argument goes with. In this examole if the randomNUM is 1, it will displqy one in the terminal, if RandomNum is 2, it will displqy two, etc.

switch (randomNum) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  case 4:
    console.log("Four");
    break;
    console.log("Five");
  // There is no need for a BREAK at the end of a switch statement sincd there are no other cases.
}