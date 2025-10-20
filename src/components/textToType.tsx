import { KeyboardContext } from "../contexts/KeyboardProvider";
import { useContext, useState, useEffect } from "react";

export default function TextToType() {
    const {
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
    const [words, setWords] = useState(0);
    const [wpm, setWpm] = useState(0);

    const textToType = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    useEffect(() => {
        setTextToTypeChars(textToType.split(""));
        setIsTextLoaded(true);
    }, [isTextLoaded]);

    useEffect(() => {
        const specialKeys = [
            "Backspace",
            "Enter",
            "Shift",
            "Control",
            "Alt",
            "Meta",
            "Tab",
            "CapsLock",
            "Escape",
            "Space",
        ];

        let lastTypedChar = typedChars[typedChars.length - 1];
        setLastLetter(lastTypedChar);

        console.log(lastTypedChar);

        if (specialKeys.includes(lastTypedChar)) {
            return;
        }

        setTotalKeysPressed(totalKeysPressed + 1);

        if (lastTypedChar === textToTypeChars[0]) {
            let textToTypeCharsCopy = [...textToTypeChars];
            textToTypeCharsCopy.shift();
            // console.log(textToTypeChars)
            setTextToTypeChars(textToTypeCharsCopy);
            setCorrectlyTypedChars([...correctlyTypedChars, lastTypedChar]);
            setCorrectKeys(correctKeys + 1);
        } else {
            setMistakes(mistakes + 1);
        }
    }, [typedChars]);

    return (
        <>
            <div className="container bg-white p-5 rounded-sm">
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

                    {lastLetter && (
                        <p className="text-2xl tracking-widest">
                            Last Letter: {lastLetter}
                        </p>
                    )}
                </div>
                <div className="text-wrap">
                    <p className="text-2xl tracking-widest inline text-green-700">
                        {correctlyTypedChars.join("")}
                    </p>
                    <p className="opacity-20 text-2xl tracking-widest inline">
                        {textToTypeChars}
                    </p>
                </div>
            </div>
        </>
    );
}
