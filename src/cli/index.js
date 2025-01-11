const inquirer = require('inquirer');
const { generateWorkflow } = require('../utils/config');

const questions = [
    { type: 'input', name: 'workflowName', message: 'Enter the workflow name:' },
    { type: 'list', name: 'workflowType', message: 'Select the workflow type:', choices: ['CI', 'Deployment'] },
    { type: 'input', name: 'branch', message: 'Enter the branch to trigger the workflow:', default: 'main' },
    { type: 'list', name: 'language', message: 'Choose the programming language for your project:', choices: ['java', 'ruby', 'node'] },
  ];
  
inquirer.prompt(questions).then((answers) => {
  generateWorkflow(answers);
});