'use client';


export default function Introblock() {
    return(
        <main className="flex items-center justify-center h-[95vh] w-screen bg-linear-to-b from-blueblack via-black to-blueblack">
            <div className="border border-cyberyellow h-[80%] w-[80%]">
                <h1 className="pt-[10%] pl-[8%] pr-[2%] pb-[2%] font-blackOpsOne text-[clamp(1rem,5cqw,12rem)]" >Software Developer</h1>
                <h1 className="pt-[2%] pl-[8%] pr-[2%] pb-[2%] font-orbitron text-[clamp(0.75rem,1.2cqw,7rem)]" >Building fast, scalable, and user-friendly applications</h1>
                <h1 className="pt-[2%] pl-[8%] pr-[2%] pb-[2%] font-orbitron text-[clamp(0.90rem,1.5cqw,8rem)]">Fronted · Backend · AI Systems · APIs</h1>

            </div>
        </main>
    )
}