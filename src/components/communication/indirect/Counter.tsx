import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

export default function Counter() {
    const [num, setNum] = useState<number>(0)

    function increment(value: number) {
        setNum(num + value)
    }

    function decrement(value: number) {
        setNum(num - value)
    }

    return (
        <div className={`
            flex flex-col p-2 w-52 h-52
            border border-zinc-400 rounded-lg
        `}>
            <Display value={num} />
            <Buttons inc={increment} dec={decrement} />
        </div>
    )
}