import {
    RequestHandler,
    getRequestType,
} from 'ask-sdk-core'
import {
    LaunchRequestScript
} from './LaunchRequest.speech'


export const LaunchRequestHandler: RequestHandler = {
    canHandle(handlerInput) {
        return getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const Speech = new LaunchRequestScript(handlerInput)
        return Speech.createResponse()
    }
};