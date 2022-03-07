import _ from 'lodash';
import inquirer from "inquirer";
import questions from "./questions.js";
import { rubric, welcome } from "./support.js";

const run = async (questions, inquirer, welcome, fn) => {

    welcome()

    let count = 0;
    const result = await inquirer.prompt(_.shuffle(questions))

    if (result.q1 == "Baton Rouge") { ++count }
    if (result.q2 == 2005) { ++count }
    if (result.q3 == "Pelican") { ++count }
    if (result.q4 == "New Orleans") { ++count }
    if (result.q5 == 1803) { ++count }

    const log = fn(count, questions.length)
    console.log(log)
}

run(questions, inquirer, welcome, rubric)