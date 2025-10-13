import Key from "./Key";

export default function Keyboard() {
    const keys = 75;
    return (
        <>
            <div className="container bg-gray-100 h-[500px] mx-auto rounded-sm flex justify-center items-center">
                <div className="grid-cols-15 grid gap-1 w-full h-full">
                    {
                        Array.from({ length: keys }, (_, index) => (
                            <Key key={index} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}