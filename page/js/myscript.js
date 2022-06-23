function getRandom(chance){
    if(Math.random() <= chance){
        return true;
    } else {
        return false;
    }
}
const gender = "Girl";
const myName = "Ayla V. Bennett";
const homeTown = "Fort Wayne, IN";
let hobby = "Programming";
let favoriteCat = "Drac";
let age = 15;
let nothingVariable = null;
let nothingList = [nothingVariable, undefined, NaN];
var isCurrentlyHappy = getRandom(0.875);
var isCoding = true || false;
var favoriteChocolateFlavor = "Dark Chocolate";
var factSheet = [gender, myName, homeTown, hobby, favoriteCat, age, isCurrentlyHappy, isCoding, favoriteChocolateFlavor];
var combinedList = [factSheet, ...nothingList, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."];
var buttonElement = document.getElementById("db");
function changeColor(){
    document.getElementById("db").style.backgroundColor = "red";
}
buttonElement.addEventListener("click", changeColor());