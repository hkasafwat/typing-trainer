import { createContext, useState } from "react";

interface KeyboardContextType {
    mistakes: number;
    textToTypeChars: string[];
    typedChars: string[];
    correctlyTypedChars: string[];
    setMistakes: (mistakes: number) => void;
    setTypedChars: (chars: string[]) => void;
    setCorrectlyTypedChars: (chars: string[]) => void;
    setTextToTypeChars: (chars: string[]) => void;
}

const KeyboardContext = createContext<KeyboardContextType>({
    mistakes: 0,
    textToTypeChars: [],
    typedChars: [],
    correctlyTypedChars: [],
    setMistakes: () => {},
    setTextToTypeChars: () => {},
    setTypedChars: () => {},
    setCorrectlyTypedChars: () => {},
});

const KeyboardProvider = ({ children }: { children: React.ReactNode }) => {
    const [textToTypeChars, setTextToTypeChars] = useState<string[]>([]);
    const [typedChars, setTypedChars] = useState<string[]>([]);
    const [mistakes, setMistakes] = useState<number>(0);
    const [correctlyTypedChars, setCorrectlyTypedChars] = useState<string[]>([]);

    return (
        <KeyboardContext.Provider value={{
            mistakes,
            setMistakes,
            typedChars,
            setTypedChars,
            textToTypeChars,
            setTextToTypeChars,
            correctlyTypedChars,
            setCorrectlyTypedChars,
        }}>
            {children}
        </KeyboardContext.Provider>
    )
};

export { KeyboardContext, KeyboardProvider };
