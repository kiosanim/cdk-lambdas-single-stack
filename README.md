# Example of Single Stack containing lambdas and their own stack files
**Author:** Fábio Sartori

This is a project example of a AWS CDK Stack with two lambdas, each with it's own CDK definition file.
Those lambda definition files using a shared API Gateway and there is a main stack file which
uses those lambda definitions as properties. 
The result is a single stack organized in multiple files each with it's respective lambdas.

Use this example at your own risk, I disclaim any responsibility for the use of this example.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

## Bootstraping CDK Stack

```bash
cdk bootstrap
```

## Show Stack in CloudFormation Syntax

```bash
cdk synth
```

## Deployment Process
```bash
cdk deploy
```