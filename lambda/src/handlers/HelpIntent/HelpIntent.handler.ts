import {
    RequestHandler,
    getRequestType,
    getIntentName,
} from 'ask-sdk-core'
import {
    HelpIntentScript
} from './HelpIntent.speech'


export const HelpIntentHandler: RequestHandler = {
    canHandle(handlerInput) {
        return getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const Speech = new HelpIntentScript(handlerInput)
        return Speech.createResponse()
    }
};