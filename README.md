# GitHub Actions Builder Cli

Generate GitHub Action workflow files and test templates automatically.

## Features

- Generate `.github` folder and workflow files.
- Customize workflows via CLI commands.
- Supports CI and Deployment workflows.
- Generate automation tests based on the chosen application language (Java, Ruby, Node).

## Installation

To install the package globally, run:

```bash
npm install -g gha-builder-cli
```

## Usage

Run the CLI tool to generate a GitHub Actions workflow:

```bash
gha-generate
```

Follow the prompts to customize your workflow:
- Provide a workflow name.
- Select the type of workflow (CI or Deployment).
- Specify the branch to trigger the workflow (default: `main`).
- Choose the programming language for your project.

### Example Workflow

#### CI Workflow
If you choose `CI` and `main` as the branch:

```yaml
name: MyCIWorkflow
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```

#### Deployment Workflow
If you choose `Deployment`:

```yaml
name: MyDeploymentWorkflow
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Deploy to Production
        run: echo "Deploying to production..."
```

## Contributing

Feel free to submit issues and pull requests to improve the tool!

## License

This project is licensed under the MIT License.