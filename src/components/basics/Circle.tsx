interface CircleProps {
    text: string;
    almostPerfect?: boolean;
}

export default function Circle(props: CircleProps) {
    return (
        <div className={`
            flex justify-center items-center
            h-64 w-64 bg-cyan-500
            text-black text-2xl font-bold
            ${props.almostPerfect ? 'rounded-3xl' : 'rounded-full'}
        `}>
            {props.text}
        </div>
    )
}