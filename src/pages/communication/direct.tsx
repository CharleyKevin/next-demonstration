import Grandfather from "@/components/communication/direct/Grandfather";

export default function DirectPage() {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-5xl mb-10'>Direct Communication</h1>
            <Grandfather name='Mariano' lastName='Silva' />
        </div>
    )
}