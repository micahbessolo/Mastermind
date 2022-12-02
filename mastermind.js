let guessAmount = 10;
let guess = [];
const gridIDs = ['a1', 'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4', 'd1', 'd2', 'd3', 'd4', 'e1', 'e2', 'e3', 'e4', 'f1', 'f2', 'f3', 'f4', 'g1', 'g2', 'g3', 'g4', 'h1', 'h2', 'h3', 'h4', 'i1', 'i2', 'i3', 'i4', 'j1', 'j2', 'j3', 'j4'];
const colors = ['red', 'black', 'white', 'yellow', 'blue', 'green'];

// gets four random colors
function fourRandomColors() {
    let correctColors = [];
    let sortedColors = colors;
    for (let i = 0; i < 4; i++) {
        let randomColor = sortedColors[Math.floor(Math.random() * sortedColors.length)];
        correctColors.push(randomColor);
        sortedColors = sortedColors.filter(function(item) { // removes the random card from the sorted deck
            return item !== randomColor;
        });
    }
    return correctColors;
}
console.log(fourRandomColors())
;
// create the classes
function createClasses() {
    for (let i = 0; i < gridID.length; i++) {
        // document.getElementById(gridIDs[i]).style.
    }
    return classArray;
}

// console.log(createClasses());