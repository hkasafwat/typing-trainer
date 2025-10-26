import { createContext, useState } from "react";

interface KeyboardContextType {
    typingMode: boolean;
    totalKeysPressed: number;
    mistakes: number;
    correctKeys: number;
    textToTypeChars: string[];
    typedChars: string[];
    correctlyTypedChars: string[];
    setTypingMode: (typingMode: boolean) => void;
    setMistakes: (mistakes: number) => void;
    setCorrectKeys: (correctKeys: number) => void;
    setTypedChars: (chars: string[]) => void;
    setCorrectlyTypedChars: (chars: string[]) => void;
    setTextToTypeChars: (chars: string[]) => void;
    setTotalKeysPressed: (totalKeysPressed: number) => void;
}

const KeyboardContext = createContext<KeyboardContextType>({
    typingMode: false,
    totalKeysPressed: 0,
    mistakes: 0,
    correctKeys: 0,
    textToTypeChars: [],
    typedChars: [],
    correctlyTypedChars: [],
    setMistakes: () => {},
    setCorrectKeys: () => {},
    setTextToTypeChars: () => {},
    setTypedChars: () => {},
    setCorrectlyTypedChars: () => {},
    setTotalKeysPressed: () => {},
    setTypingMode: () => {},
});

const KeyboardProvider = ({ children }: { children: React.ReactNode }) => {
    const [textToTypeChars, setTextToTypeChars] = useState<string[]>([]);
    const [typedChars, setTypedChars] = useState<string[]>([]);
    const [mistakes, setMistakes] = useState<number>(0);
    const [correctlyTypedChars, setCorrectlyTypedChars] = useState<string[]>([]);
    const [correctKeys, setCorrectKeys] = useState<number>(0);
    const [totalKeysPressed, setTotalKeysPressed] = useState<number>(0);
    const [typingMode, setTypingMode] = useState<boolean>(false);

    return (
        <KeyboardContext.Provider value={{
            typingMode,
            setTypingMode,
            mistakes,
            setMistakes,
            typedChars,
            setTypedChars,
            textToTypeChars,
            setTextToTypeChars,
            correctlyTypedChars,
            setCorrectlyTypedChars,
            correctKeys,
            setCorrectKeys,
            totalKeysPressed,
            setTotalKeysPressed,
        }}>
            {children}
        </KeyboardContext.Provider>
    )
};

export { KeyboardContext, KeyboardProvider };
