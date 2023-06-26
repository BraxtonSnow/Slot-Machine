let specialCharacters = ["@", "#", "$", "*", "!", "&", "%", "?"];
let tooBadResponses = [
  "That's too bad!",
  "Maybe next time!",
  "Try again!",
  "You got this!",
  "So close!",
  "Don't give up!",
  "Just one more!",
  "Bad fortune is followed by good fortune!",
];

let boolean = true;
console.log(
  "********* Welcome to the Games *********\n\n  How lucky can you be?"
);

function spinTheWheelAnimation() {
  return new Promise((resolve, reject) => {
    let spinCount = 10;
    let intervalId = setInterval(() => {
      let emptyArray = [];
      console.clear();
      for (let i = 0; i < specialCharacters.length + 1; i++) {
        let index = Math.floor(Math.random() * specialCharacters.length);
        emptyArray.push(index);
      }
      let formattedString = `|${specialCharacters[emptyArray[0]]} ${
        specialCharacters[emptyArray[1]]
      } ${specialCharacters[emptyArray[2]]}|\n|${
        specialCharacters[emptyArray[3]]
      } ${specialCharacters[emptyArray[4]]} ${
        specialCharacters[emptyArray[5]]
      }|\n|${specialCharacters[emptyArray[6]]} ${
        specialCharacters[emptyArray[7]]
      } ${specialCharacters[emptyArray[8]]}|`;
      console.log("-------");
      console.log(formattedString);
      console.log("-------");
      spinCount--;
      if (spinCount === 0) {
        clearInterval(intervalId);
        resolve(true);
      }
    }, 150);
  });
}
let moneyYouHave = 500;
async function fetchData() {
  try {
    while (boolean === true) {
      let emptyArray = [];
      let moneyToEarn = [25, 50, 100, 150, 200, 250, 500, 1000];
      let moneyLost = [10, 20, 30, 40, 50, 100, 125, 150];
      let index2 = Math.floor(Math.random() * specialCharacters.length);
      const response = await prompt(
        `You currently have $${moneyYouHave}.00\nMoney you can win $${moneyToEarn[index2]}.00\nMoney you can loose $${moneyLost[index2]}.00\n\nDo you want to Gamble: (y) for yes (n) for no`
      );

      if (response === "y") {
        await spinTheWheelAnimation();
        console.clear();
        for (let i = 0; i < specialCharacters.length + 1; i++) {
          let index = Math.floor(Math.random() * specialCharacters.length);
          emptyArray.push(index);
        }
        let formattedString = `|${specialCharacters[emptyArray[0]]} ${
          specialCharacters[emptyArray[1]]
        } ${specialCharacters[emptyArray[2]]}|\n|${
          specialCharacters[emptyArray[3]]
        } ${specialCharacters[emptyArray[4]]} ${
          specialCharacters[emptyArray[5]]
        }|\n|${specialCharacters[emptyArray[6]]} ${
          specialCharacters[emptyArray[7]]
        } ${specialCharacters[emptyArray[8]]}|`;
        console.log("-------");
        console.log(formattedString);
        console.log("-------");
        if (
          emptyArray[3] === emptyArray[4] &&
          emptyArray[3] === emptyArray[5]
        ) {
          console.log("You Win!");
          moneyYouHave += moneyToEarn[index2];
          console.log(`You now have $${moneyYouHave}.00`);
        } else {
          console.log(tooBadResponses[emptyArray[1]]);
          moneyYouHave -= moneyLost[index2];
          console.log(`You now have $${moneyYouHave}.00`);
        }
      } else {
        console.log("See you next time!");
        boolean = false;
      }
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

setTimeout(() => {
  fetchData();
}, 2000);
