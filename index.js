const inquirer = require("inquirer");
const fs = requre("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, answers) {
    //possible this needs to be let. this is the file starting as an empty string
    const svgString = "";
    //Below is likely to be a problem spot. Might not need that slash after "2"
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
    }
}