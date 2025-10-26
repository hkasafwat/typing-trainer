import { useState, useContext, useEffect, useRef } from "react";
import { KeyboardContext } from "../../contexts/KeyboardProvider";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

export default function KeyboardContainer() {
    const { typingMode, setTypingMode } = useContext(KeyboardContext);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const { setTypedChars, typedChars } = useContext(KeyboardContext);

    const onKeyboardPress = (key: string) => {
        setTypedChars([...typedChars, key]);
    }

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current?.focus();
        }
    }

    useEffect(() => {
        if (typingMode) {
            focusInput();
        }
    }, [typingMode]);

    return (
        <>
            <div className="container mt-6 mx-auto rounded-sm flex justify-center items-center flex-col relative">
                <Keyboard
                    physicalKeyboardHighlight
                />

                <div className="flex justify-center items-center">
                    <input 
                        ref={inputRef} 
                        type="text" 
                        className="absolute left-[-999999px]" 
                        onKeyDown={(e) => onKeyboardPress(e.key)}
                        onBlur={() => setTypingMode(false)}
                    />

                    {!typingMode && (
                        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-gray-500/60 rounded-sm">
                            <button 
                            onClick={() => setTypingMode(true)}
                            className="bg-blue-400 hover:bg-blue-500 text-white font-bold shadow-md px-4 py-2 rounded-sm cursor-pointer transition-all transform duration-300"
                            >
                                Click to start typing
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}