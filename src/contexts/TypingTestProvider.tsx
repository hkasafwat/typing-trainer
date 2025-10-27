import { createContext, useState } from "react";

type AvailableTests = "words" | "timed" | null;
type TypingTest = {
    testType: AvailableTests;
    elapsedTime: number;
    accuracy: number;
    totalKeysPressed: number;
    totalTextCharacters: number;
    totalCorrectKeys: number;
    totalMistakes: number;
}
type CompletedTypingTests = {
    TypingTests: TypingTest[];
}

interface TypingTestContextType {
    testType: AvailableTests;
    elapsedTime: number;
    accuracy: number;
    totalKeysPressed: number;
    totalTextCharacters: number;
    totalCorrectKeys: number;
    totalMistakes: number;
    completedTests: CompletedTypingTests;
    setTestType: (testType: AvailableTests) => void;
    setElapsedTime: (elapsedTime: number) => void;
    setAccuracy: (accuracy: number) => void;
    setTotalKeysPressed: (totalKeysPressed: number) => void;
    setTotalTextCharacters: (totalTextCharacters: number) => void;
    setTotalCorrectKeys: (totalCorrectKeys: number) => void;
    setTotalMistakes: (totalMistakes: number) => void;
    setCompletedTests: (completedTests: CompletedTypingTests) => void;
}

const TypingTestContext = createContext<TypingTestContextType>({
    testType: null,
    elapsedTime: 0,
    accuracy: 0,
    totalKeysPressed: 0,
    totalTextCharacters: 0,
    totalCorrectKeys: 0,
    totalMistakes: 0,
    completedTests: {
        TypingTests: [],
    },
    setTestType: () => {},
    setElapsedTime: () => {},
    setAccuracy: () => {},
    setTotalKeysPressed: () => {},
    setTotalTextCharacters: () => {},
    setTotalCorrectKeys: () => {},
    setTotalMistakes: () => {},
    setCompletedTests: () => {},
});

const TypingTestProvider = ({ children }: { children: React.ReactNode }) => {
    const [testType, setTestType] = useState<AvailableTests>(null);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [accuracy, setAccuracy] = useState<number>(0);
    const [totalTextCharacters, setTotalTextCharacters] = useState<number>(0);
    const [totalCorrectKeys, setTotalCorrectKeys] = useState<number>(0);
    const [totalMistakes, setTotalMistakes] = useState<number>(0);
    const [totalKeysPressed, setTotalKeysPressed] = useState<number>(0);
    const [completedTests, setCompletedTests] = useState<CompletedTypingTests>({
        TypingTests: [],
    });

    return (
        <TypingTestContext.Provider value={{
            testType,
            setTestType,
            elapsedTime,
            setElapsedTime,
            accuracy,
            setAccuracy,
            totalKeysPressed,
            setTotalKeysPressed,
            totalTextCharacters,
            setTotalTextCharacters,
            totalCorrectKeys,
            setTotalCorrectKeys,
            totalMistakes,
            setTotalMistakes,
            completedTests,
            setCompletedTests,
        }}>
            {children}
        </TypingTestContext.Provider>
    )
};

export { TypingTestContext, TypingTestProvider };
