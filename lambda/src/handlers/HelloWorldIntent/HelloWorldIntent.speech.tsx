/** @jsx ssml */
import {
    ssml,
    SpeechScriptJSX
} from '@ask-utils/speech-script'
import { IntentRequest } from 'ask-sdk-model'

export class HelloWorldIntentScript extends SpeechScriptJSX<IntentRequest> {
    speech() {
        return (
            <speak>
                <p>こんにちは！</p>
                <break time="0.5s"/>
                <p>ではまた！</p>
            </speak>
        )
    }
}