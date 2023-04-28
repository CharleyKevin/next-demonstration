interface SonProps {
    name: string
    lastName: string
}

export default function Son(props: SonProps) {
    return (
        <div className={`
            flex justify-center items-center
            bg-green-500 rounded-md p-5 border border-white
        `}>
            <div className='flex justify-center gap-2 text-2xl'>
                <span className='font-black'>Son</span>
                <span>{props.name}</span>
                <span> {props.lastName}</span>
            </div>
        </div>
    )
}