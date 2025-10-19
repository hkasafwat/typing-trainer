import { KeyboardContext } from "../contexts/KeyboardProvider";
import { useContext, useState, useEffect } from "react";

export default function TextToType() {
    const { textToTypeChars, setTextToTypeChars, typedChars, setMistakes, mistakes,
        correctlyTypedChars, setCorrectlyTypedChars
     } = useContext(KeyboardContext);
    const [isTextLoaded, setIsTextLoaded] = useState(false);

    const textToType = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    useEffect(() => {
        setTextToTypeChars(textToType.split(''));
        setIsTextLoaded(true);
    }, [isTextLoaded]);

    useEffect(() => {
        let lastTypedChar = typedChars[typedChars.length - 1]

        if (lastTypedChar === textToTypeChars[0]) {
            let textToTypeCharsCopy = [...textToTypeChars];
            textToTypeCharsCopy.shift();
            // console.log(textToTypeChars)
            setTextToTypeChars(textToTypeCharsCopy);
            setCorrectlyTypedChars([...correctlyTypedChars, lastTypedChar]);
        } else {
            setMistakes(mistakes + 1);
        }

    }, [typedChars])


    return (
        <>
            <div className="container bg-white p-5 rounded-sm">
                <p className="text-2xl tracking-widest mb-4">Mistakes: {mistakes}</p>
                <div className="text-wrap">
                    <p className="text-2xl tracking-widest inline text-green-700">{correctlyTypedChars.join('')}</p>
                    <p className="opacity-50 text-2xl tracking-widest inline">{textToTypeChars}</p>
                </div>
            </div>
        </>
    );
};
