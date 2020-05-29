import {
    RequestHandler,
    getRequestType,
    getIntentName,
} from 'ask-sdk-core'
import {
    HelloWorldIntentScript
} from './HelloWorldIntent.speech'


export const HelloWorldIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        return getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelloWorldIntent';
    },
    handle(handlerInput) {
        const Speech = new HelloWorldIntentScript(handlerInput)
        return Speech.createResponse()
    }
};