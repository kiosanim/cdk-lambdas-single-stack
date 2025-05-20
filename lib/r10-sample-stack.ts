import {Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {RestApi} from 'aws-cdk-lib/aws-apigateway';
import {createPlayersStatus} from './players-status-stack';
import {createMatchesStatus} from './matches-status-stack';

export class R10SampleStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const api = new RestApi(this, 'SharedApiGateway', {
            restApiName: 'Shared API Gateway',
        });

        createPlayersStatus(this, api);
        createMatchesStatus(this, api);
    }
}
