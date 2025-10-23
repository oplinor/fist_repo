// button.js
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "list",
      name: "action",
      message: "Choose a button:",
      choices: ["Button 1", "Button 2", "Exit"],
    },
  ])
  .then((answers) => {
    if (answers.action === "Button 1") {
      console.log("You clicked Button 1!");
    } else if (answers.action === "Button 2") {
      console.log("You clicked Button 2!");
    } else {
      console.log("Goodbye!");
    }
  });
