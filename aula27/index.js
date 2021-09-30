const userScore = 1000;

const userLevel = userScore >= 1000 ? "VIP User" : "Standard User";

const userColor = "Pink";
const standardColor = userColor || "Black";

console.log(userLevel, standardColor);
