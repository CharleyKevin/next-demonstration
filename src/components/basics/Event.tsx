export default function Event() {
    let cont = 0

    function increment() {
        cont++
        console.log(cont)
    }

    return (
        <button className={`
            flex justify-center items-center    
            h-72 w-72 bg-green-600 text-4xl
        `} onClick={increment}>
            Event
        </button>
    )
}