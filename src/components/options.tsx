import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { useContext } from "react";
import { TypingTestContext } from "../contexts/TypingTestProvider";

export default function Options() {

    const { setTestType } = useContext(TypingTestContext);

    const reset = () => {
        
    }
    
    return (
        <div className="mx-auto rounded-md bg-white p-2">
                <div className="flex justify-center items-center gap-2">
                    <Popover>
                        <PopoverTrigger>
                            <Button variant="outline">Content Type</Button>
                        </PopoverTrigger>
                        
                        <PopoverContent>
                            <div className="flex flex-col gap-2">
                                <Button>Random</Button>
                                <Button>Lorem Ipsum</Button>
                                <Button>Quotes</Button>
                                <Button>Poems</Button>
                                <Button>Custom</Button>
                            </div>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger>
                            <Button variant="outline">Text Length</Button>
                        </PopoverTrigger>
                        
                        <PopoverContent>
                            <div className="flex flex-col gap-2">
                                <Button>~30 characters</Button>
                                <Button>~60 characters</Button>
                                <Button>~120 characters</Button>
                                <Button>~240 characters</Button>
                            </div>
                        </PopoverContent>
                    </Popover>

                     <Popover>
                        <PopoverTrigger>
                            <Button variant="outline">Typing Tests</Button>
                        </PopoverTrigger>

                        <PopoverContent>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col gap-2 text-center">
                                    <span className="border-b border-gray-200 pb-1 mb-1">Timed Test</span>
                                    <Button>15 seconds</Button>
                                    <Button>30 seconds</Button>
                                    <Button>45 seconds</Button>
                                    <Button>60 seconds</Button>
                                </div>

                                <div className="flex flex-col gap-2 text-center">
                                    <span className="border-b border-gray-200 pb-1 mb-1">Text Length Test</span>
                                    <Button>30 characters</Button>
                                    <Button>60 characters</Button>
                                    <Button>120 characters</Button>
                                    <Button>240 characters</Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>

                    <Button variant="destructive" onClick={() => reset()}>Reset</Button>
                </div>
        </div>
    )
}