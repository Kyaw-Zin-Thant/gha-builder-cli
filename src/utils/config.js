const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const templateDir = path.join(__dirname, '../templates');

const loadTemplate = (templateName) => {
  const filePath = path.join(templateDir, `${templateName}-template.yaml`);
  return fs.readFileSync(filePath, 'utf8');
};

const generateWorkflow = (config) => {
  const templateName = config.workflowType.toLowerCase();
  let template = loadTemplate(templateName);

  Object.keys(config).forEach((key) => {
    const placeholder = `{{${key}}}`;
    template = template.replace(new RegExp(placeholder, 'g'), config[key]);
  });

  const outputDir = path.join(process.cwd(), '.github/workflows');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, `${config.workflowName}-template.yaml`);
  fs.writeFileSync(outputPath, template);
  console.log(`Workflow generated at ${outputPath}`);
};

module.exports = { generateWorkflow };