//Store array of strings 1
const array1= ["Tottenham", "Liverpool", "Man. City", "Man. United", "Leeds. Utd", "Wolves", "Newcastle Utd", "WBA", "Arsenal", "Fulham"];

//Store array of strings 2
const array2= ["won the league", "got promoted", "got relegated", "was defeated", "won the match"];

//Store array of strings 3
const array3= ["early", "easily", "fighting till the end"];

const getRandomNumber = (arrLength) => {
  return Math.floor(Math.random() * arrLength);
}

const generateRandomString = (array1,array2,array3) => {
    const random1 = getRandomNumber(array1.length);
    const random2 = getRandomNumber(array2.length);
    const random3 = getRandomNumber(array3.length);
    let string1 = array1[random1];
    let string2 = array2[random2];
    let string3 = array3[random3];
    let stringResults = string1 + " " + string2 + " "+  string3;
    return stringResults;
}

console.log(generateRandomString(array1, array2, array3));