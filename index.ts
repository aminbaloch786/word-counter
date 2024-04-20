#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

async function wordCounter() {
  console.clear();

  // Get the length of the console
  const lineLength = process.stdout.columns || 80;

  // Create a colorful line
  const line = chalk.hex("#FFA500")("=".repeat(lineLength));

  // Create the heading and center it in the line
  const heading = "Code With Muhammad Amin";
  const paddingLength = Math.floor((lineLength - heading.length) / 2);
  const paddedHeading =
    "=".repeat(paddingLength) + heading + "=".repeat(paddingLength);

  // Print the colorful line, heading, and another colorful line
  console.log(line);
  console.log(paddedHeading);
  console.log(line);

  const answers: { Sentence: string } = await inquirer.prompt([
    {
      name: "Sentence",
      type: "input",
      message: "Enter your sentence to count the words: ",
    },
  ]);

  const words = answers.Sentence.trim().split(" ");

  console.log(chalk.green("\nYour sentence split into words:"));
  console.log(chalk.green(words));

  console.log(chalk.blueBright(`\nYour sentence word count is: ${words.length}`));
}

wordCounter();