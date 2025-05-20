import {APIGatewayProxyEvent, APIGatewayProxyResult, Context} from "aws-lambda";

export async function handler(event: APIGatewayProxyEvent,
                              context: Context): Promise<APIGatewayProxyResult> {
    const lambdaRequestId = context.awsRequestId;
    const method = event.httpMethod;
    const apiRequestId = event.requestContext.requestId;
    console.log(`API Gateway RequestId: ${apiRequestId} - Lambda requestId: ${lambdaRequestId}`);
    if (event.resource === '/players') {
        if (method === 'GET') {
            console.log('GET')
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'GET Players - OK'
                })
            }
        }
    }
    return {
        statusCode: 400,
        body: JSON.stringify({
            mesage: 'Bad Request'
        })
    }
}