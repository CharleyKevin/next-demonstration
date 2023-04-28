import RandomInage from "@/components/hooks/RandomImage";

export default function ImagesPage() {
    return (
        <div className={`
            flex justify-center items-center h-screen
            gap-5
        `}>
            <RandomInage />
            <RandomInage />
            <RandomInage />
        </div>
    )
}