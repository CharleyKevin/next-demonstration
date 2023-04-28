import Son from "./Son";

interface FatherProps {
    name: string
    lastName: string
}

export default function Father(props: FatherProps) {
    return (
        <div className={`
            flex flex-col gap-5
            bg-blue-500 text-white border border-white
            rounded-md p-5
        `}>
            <div className='flex justify-center gap-2 text-2xl'>
                <span className="font-black">Father</span>
                <span>{props.name}</span>
                <span> {props.lastName}</span>
            </div>
            <div className='flex gap-5'>
                <Son name='Amanda' lastName={props.lastName} />
                <Son name='Maria' lastName={props.lastName} />
            </div>
        </div>
    )
}