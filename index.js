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
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    fs.writeToFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Created logo.svg");
    });
}

function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                message:
                  "Please enter the three characters you want your logo to present",
                name: "text",
              },

        ])
}
