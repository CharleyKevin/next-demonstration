import Father from "./Father";

interface GrandfatherProps {
    name: string
    lastName: string
}

export default function Grandfather(props: GrandfatherProps) {
    return (
        <div className={`
            flex flex-col gap-5 p-5 rounded-md
            bg-purple-500 text-white border border-white    
        `}>
            <div className='flex justify-center gap-2 text-2xl'>
                <span className="font-black">Grandfather</span>
                <span>{props.name}</span>
                <span> {props.lastName}</span>
            </div>
            <div className='flex gap-5'>
                <Father name="João" lastName={props.lastName} />
                <Father name="Pedro" lastName={props.lastName} />
                <Father name="Jorge" lastName={props.lastName} />
            </div>
        </div>
    )
}
