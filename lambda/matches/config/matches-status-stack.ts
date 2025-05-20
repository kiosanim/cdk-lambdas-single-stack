import {Code, Function, Runtime} from 'aws-cdk-lib/aws-lambda';
import {Construct} from 'constructs';
import {LambdaIntegration, RestApi} from 'aws-cdk-lib/aws-apigateway';
import {Duration} from "aws-cdk-lib";
import path from "path";
import {NodejsFunction} from "aws-cdk-lib/aws-lambda-nodejs";

export function createMatchesStatus(scope: Construct, api: RestApi): Function {
    const fn = new NodejsFunction(scope, 'MatchesStatus', {
        runtime: Runtime.NODEJS_22_X,
        entry: path.join(__dirname, '../matches-status.ts'),
        handler: 'handler',
        memorySize: 128,
        timeout: Duration.seconds(5),
    });
    const resource = api.root.addResource('matches');
    resource.addMethod('GET', new LambdaIntegration(fn));
    return fn;
}
