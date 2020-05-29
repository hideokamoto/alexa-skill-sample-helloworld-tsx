/** @jsx ssml */
import {
    ssml,
    SpeechScriptJSX
} from '@ask-utils/speech-script'
import { IntentRequest } from 'ask-sdk-model'

export class HelpIntentScript extends SpeechScriptJSX<IntentRequest> {
    speech() {
        return (
            <speak>
                <p>SSMLをJSXで試すサンプルスキルです</p>
            </speak>
        )
    }
    reprompt() {
        return (
            <speak>
                なにをためしますか？
            </speak>
        )

    }
}