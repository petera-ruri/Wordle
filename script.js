let cellIdArray = [
   "cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9", "cell10",
   "cell11", "cell12", "cell13", "cell14", "cell15", "cell16", "cell17", "cell18", "cell19", "cell20",
   "cell21", "cell22", "cell23", "cell24", "cell25", "cell26", "cell27", "cell28", "cell29", "cell30"
]
let keysIdArray = [
   "keyZ", "keyX", "keyC", "keyV", "keyB", "keyN", "keyM",
   "keyA", "keyS", "keyD", "keyF", "keyG", "keyH", "keyJ", "keyK", "keyL",
   "keyQ", "keyW", "keyE", "keyR", "keyT", "keyY", "keyU", "keyI",
   "keyO", "keyP"
]
let guessWord = [{
   word: "BRAVE",
   letters: ["B", "R", "A", "V", "E"],
},
   {
   word: "CRASH",
   letters: ["C", "R", "A", "S", "H"],
   }
   ,{
   word: "CLOUD",
   letters: ["C", "L", "O", "U", "D"],
   guessIsCorrect: true

},
{
   word: "POWER",
   letters: ["P", "O", "W", "E", "R"],
   guessIsCorrect: true
},
{
   word: "TIGER",
   letters: ["T", "I", "G", "E", "R"],
   guessIsCorrect: true
},
{
   word: "HOUSE",
   letters: ["H", "O", "U", "S", "E"],
   guessIsCorrect: true

},
{
   word: "OCEAN",
   letters: ["O", "C", "E", "A", "N"],
   guessIsCorrect: true
},
{
   word: "APPLE",
   letters: ["A", "P", "P", "L", "E"],
},
{
   word: "WATER",
   letters: ["W", "A", "T", "E", "R"],
}, 
{
   word: "RIVER",
   letters: ["R", "I", "V", "E", "R"],
},
{
   word: "SUNNY",
   letters: ["S", "U", "N", "N", "Y"],

},
{
   word: "SLEEP",
   letters: ["S", "L", "E", "E", "P"],
},
{
   word: "paper",
   letters: ["P", "A", "P", "E", "R"],
},
{
   word: "SUGAR",
   letters: ["S", "U", "G", "A", "R"],
},
{
   word: "GRADE"
   , letters: ["G", "R", "A", "D", "E"],
},
{
   word: "CLOUD",
   letters: ["C", "L", "O", "U", "D"],
   guessIsCorrect: true
},
{
   word: "TOWER",
   letters: ["T", "O", "W", "E", "R"],
},
]
let randomPlaces = Math.floor(Math.random() * 31);
let levelIndex = 0;

let randomWord = guessWord[Math.floor(Math.random() * guessWord.length)];
let youWin = true;



// Generate A random word //
function generateRandomWord() {

   randomWord = guessWord[Math.floor(Math.random() * guessWord.length)];
   console.log(randomWord.letters);
   let key = document.getElementById("keyStart");

   cellIdArray.forEach(cellId => {
      let cell = document.getElementById(cellId);
      key.addEventListener('click', function () {
         cell.textContent = "";
         cell.style.backgroundColor = "white";

      })
   })



}
generateRandomWord();


// DisplayLetters to Cells //
keysIdArray.forEach(keyId => {
   let key = document.getElementById(keyId);

   key.addEventListener('click', function appendLetter() {
      console.log(this);
      let cellId = cellIdArray[levelIndex];
      let cell = document.getElementById(cellId);

      levelIndex++;

      cell.textContent = key.innerHTML

      let letterFound = false
      let guessedWord = false

      for (i = 0; i < randomWord.letters.length; i++) {
         if (cell.innerHTML === randomWord.letters[i].charAt(i)) {
            cell.style.backgroundColor = "SpringGreen";
         }
         else if (i + 1 < randomWord.letters.length && cell.innerHTML === randomWord.letters[i + 1]) {
            // console.log("Next letter: " + randomWord.letters[i + 1]);
            let nextLetterIndex = i + 1;
            let nextLetter = randomWord.letters[nextLetterIndex];
            cell.style.backgroundColor = "springGreen";
            guessedWord = true;
            letterFound = true;
            break;
         }
         console.log(`Letter at index ${i} in random word: ${randomWord.letters[i]}`);
      }
      // console.log(guessedWord);
      
      
      if (!randomWord.letters.includes(cell.textContent)) {
         cell.style.backgroundColor = "red";
      }
      
   });

   // console.log(cell);
});

// Clear Cells //
function clearCells() {
   cellIdArray.forEach(cellId => {
      let cell = document.getElementById(cellId);

      document.getElementById('keyClear').addEventListener('click', function () {
         cell.textContent = "";
         cell.style.backgroundColor = "white";
         levelIndex = 0;




         if (levelIndex < 0) {
            levelIndex = 0;
         }

      })
   })
}

// Delete Cells //
function deleteLetter() {
   cellIdArray.forEach(cellId => {
      let cell = document.getElementById(cellId);

      document.getElementById('keyDel').addEventListener('click', function () {
         cell.textContent = "";
         cell.style.backgroundColor = "white";
         levelIndex = 0;


         if (cell.textContent === "") {
            levelIndex--;
            if (levelIndex < 0) {
               levelIndex = 0;
            }
         }

      })
   })
}

// BackSpace Cells // 
function backSpace() {
   document.getElementById('keyBackSpace').removeEventListener('click', backSpaceHandler)
  
   // console.log(cell);
   function backSpaceHandler() {
      console.log("Before decrement - levelIndex:", levelIndex);

      if (levelIndex >= 0) {
         let cellId = cellIdArray[levelIndex]
         let cell = document.getElementById(cellId)
         levelIndex--;

         console.log("CellId:", cellId);
         console.log("Cell:", cell);

         cell.innerHTML = "";
         cell.style.backgroundColor = "white";
      }

      console.log("After decrement - levelIndex:", levelIndex);
   }

   document.getElementById('keyBackSpace').addEventListener('click', backSpaceHandler);
}
backSpace();

// Check Word //
function checkWord() {

   let rowsChecked = 0;
   let cell = document.getElementById(cellIdArray)


   for (let i = 0; i < randomWord.letters.length; i++) {
      rowsChecked++; 
      let rowContent = "";
      for (let j = 1; j <= 5; j++) {
         rowContent += document.getElementById('cell' + (5 * i + j)).textContent;
      }
      if (rowContent === randomWord.letters.join('')) {
         alert("You win!");
         cell.innerHTML = "";
         return true;
      } else {
         console.log("Rows checked:", rowsChecked);
      }
   }
   
   
   console.log();


   // console.log(randomWord.letters[1]);
   // console.log(randomWord.letters[2]);
   // console.log(randomWord.letters[3]);
   // console.log(randomWord.letters[4]);
}
checkWord();