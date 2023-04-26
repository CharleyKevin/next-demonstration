import Circle from "@/components/basics/Circle";

export default function CirclePage() {
    return (
        <div className="flex justify-around items-center h-screen">
            <Circle text="Circle #1" />
            <Circle text="Circle #2" almostPerfect />
            <Circle text="Circle #3" />
        </div>
    )
}