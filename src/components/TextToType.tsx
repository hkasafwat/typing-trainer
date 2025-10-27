import { KeyboardContext } from "@/contexts/KeyboardProvider";
import { useContext, useState, useEffect, useRef } from "react";

export default function TextToType() {
    const isFirstRender = useRef(true);
    const isFirstRender2 = useRef(true);

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
    const [lastLetter, setLastLetter] = useState("");

    const textToType = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    useEffect(() => {
        if (isFirstRender.current) {
            console.log("first render");
            console.log(textToType);
            setTextToTypeChars(textToType.split(""));
            console.log(textToTypeChars);
            isFirstRender.current = false;

            return;
        }
        console.log("second render");
    }, []); 

    useEffect(() => {
        if (isFirstRender2.current) {
            isFirstRender2.current = false;
            return;
        }

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
            <div className="container flex flex-col">
                <div className=" bg-white p-5 rounded-sm">
                    <div className="text-wrap">
                        <p className="text-2xl tracking-widest inline text-green-700">
                            {correctlyTypedChars.join("")}
                        </p>
                        <p className="opacity-20 text-2xl tracking-widest inline">
                            {textToTypeChars}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

