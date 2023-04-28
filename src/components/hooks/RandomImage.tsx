import Image from "next/image"
import { useState } from "react"

export default function RandomInage() {
    const [search, setSearch] = useState<string>('abstract')
    const [size, setSize] = useState<number>(300)
    const url = 'https://source.unsplash.com/featured/'
    
    function urlImage() {
        return `${url}${size}x${size}?${search}`
    }

    function buttonRender(value: string) {
        return (
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md
            `} onClick={() => {
                setSearch(value)
            }}>
                {value}
            </button>
        )
    }

    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
            <div className="flex justify-center gap-7">
                <span>{search}</span>
                <span>{size}x{size}</span>
            </div>
            <Image src={urlImage()} width={300} height={300} alt="Image" className="rounded-md" />
            <div>
                {buttonRender('abstract')}
                {buttonRender('city')}
                {buttonRender('person')}
            </div>
            <div>
                <input 
                    type="number"
                    value={size}
                    className="bg-zinc-800 p-2 rounded-md outline-non w-full"
                    onChange={e => setSize(+e.target.value)}
                />
            </div>  
        </div>
    )
}