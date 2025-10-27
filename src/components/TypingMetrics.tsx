import { KeyboardContext } from "../contexts/KeyboardProvider";
import { useContext, useState, useEffect } from "react";

export default function TypingMetrics() {
    const {
        typingMode,
        textToTypeChars,
        setTextToTypeChars,
        typedChars,
        setMistakes,
        mistakes,
        correctlyTypedChars,
        setCorrectlyTypedChars,
        correctKeys,
        setCorrectKeys,
        totalKeysPressed,
        setTotalKeysPressed,
    } = useContext(KeyboardContext);
    const [isTextLoaded, setIsTextLoaded] = useState(false);
    const [lastLetter, setLastLetter] = useState("");
    const [wpm, setWpm] = useState(0);

    return (
        <div className="metrics  bg-white p-5 rounded-sm">
            <div className="flex flex-col justify-between mb-4">
                <p className="text-2xl tracking-widest">Accuracy: {((correctKeys / totalKeysPressed) * 100).toFixed(0)}%</p>
                <p className="text-2xl tracking-widest">Mistakes: {mistakes}</p>
                <p className="text-2xl tracking-widest">
                    Correct Keys: {correctKeys}
                </p>
                <p className="text-2xl tracking-widest">
                    Total Keys Pressed: {totalKeysPressed}
                </p>
                <p className="text-2xl tracking-widest">
                    Words: {(correctKeys / 5)}
                </p>
                {/* <p className="text-2xl tracking-widest">
                        WPM: {wpm}
                    </p> */}
                {lastLetter && (
                    <p className="text-2xl tracking-widest">
                        Last Letter: {lastLetter}
                    </p>
                )}
            </div>
        </div>
    )
}