/** @jsx ssml */
import {
    ssml,
    SpeechScriptJSX
} from '@ask-utils/speech-script'
import { LaunchRequest } from 'ask-sdk-model'

export class LaunchRequestScript extends SpeechScriptJSX<LaunchRequest> {
    speech() {
        return (
            <speak>
                <p>こんにちは！</p>
                <break time="0.5s"/>
                <p>お元気ですか？</p>
            </speak>
        )
    }
    reprompt() {
        return (
            <speak>
                お元気ですか？<break time="0.5s"/>
                <amazon-effect name="whispered">今日はいい日になるといいですね。</amazon-effect>
            </speak>
        )

    }
}