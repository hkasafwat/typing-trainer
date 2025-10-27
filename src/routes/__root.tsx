import { createRootRoute } from '@tanstack/react-router'

import '../App.css'
import Keyboard from '../components/KeyboardContainer'
import TextToType from '../components/TextToType';
import Options from '../components/options';
import TypingMetrics from '../components/TypingMetrics';
import { KeyboardProvider } from '../contexts/KeyboardProvider';
import { TypingTestProvider } from '../contexts/TypingTestProvider';

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <KeyboardProvider>
            <TypingTestProvider>
                <div className="bg-gray-200 h-screen mx-auto flex justify-center items-center flex-col gap-5">
                    <Options />
                    <TypingMetrics />
                    <TextToType />
                    <Keyboard />
                </div>
            </TypingTestProvider>
        </KeyboardProvider>
    )
}
