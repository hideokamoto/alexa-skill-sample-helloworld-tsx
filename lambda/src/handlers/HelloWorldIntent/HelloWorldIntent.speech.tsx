/** @jsx ssml */
import {
    ssml,
    SpeechScriptJSX
} from '@ask-utils/speech-script'
import { IntentRequest } from 'ask-sdk-model'

export class HelloWorldIntentScript extends SpeechScriptJSX<IntentRequest> {
    speech() {
        const isNewSession = this.props.session.new
        const {
            locale
        } = this.props.request
        if (isNewSession) {
            return (
                <speak>
                    <p>はじめまして！</p>
                    <p>{locale}から起動しました。</p>
                </speak>
            )
        }
        return (
            <speak>
                <p>こんにちは！</p>
                <break time="0.5s"/>
                <p>ではまた！</p>
            </speak>
        )
    }
}