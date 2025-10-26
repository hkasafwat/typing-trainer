import { createRootRoute } from '@tanstack/react-router'

import '../App.css'
import Keyboard from '../components/Keyboard/KeyboardContainer'
import TextToType from '../components/textToType';
import Options from '../components/options';

import { KeyboardProvider } from '../contexts/KeyboardProvider';

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <KeyboardProvider>
            <div className="bg-gray-200 h-screen mx-auto flex justify-center items-center flex-col">
                <Options />
                <TextToType />
                <Keyboard />
            </div>
        </KeyboardProvider>
    )
}
