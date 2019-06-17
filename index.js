#!/usr/bin/env node
const inquirer = require("inquirer");

//const startGui = require("./start-gui");
const photoProcess = require("cj-photo-process")({ inquirer, getCmd: true });
//const findInFiles = require("./find-in-files");
//const mountsHome = require("./mounts-home");

const tools = [
  { name: "Process Photos", cmd: photoProcess }
  //  { name: "Home Drive Mounts", cmd: mountsHome },
  //  { name: "Find in Files", cmd: findInFiles },
  //  { name: "GUI", cmd: startGui }
];

const inq = inquirer
  .prompt([
    {
      type: "list",
      message: "Select tool required.",
      name: "tool",
      choices: tools
    }
  ])
  .then(
    answers =>
      console.log("answers", answers, photoProcess) ||
      tools.filter(tool => tool.name === answers.tool)[0].cmd({ inquirer })
  );
