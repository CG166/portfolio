'use client';

export default function ContactMe() {
    return (
        <main>
            <div className="w-screen h-[30vh]"
                style={{
                    background: `linear-gradient(
                    to bottom,
                    #0A0F1E 0%,
                    #0A0F1E 10%,
                    #090E1C 25%,
                    #070B16 45%,
                    #04070D 65%,
                    #020305 82%,
                    #000000 100%
                    )`,
                }}
                />
            <div className="bg-black w-screen h-screen flex justify-center items-center">
            <div className="relative border-8 border-bioniccyan p-6 pt-8 h-[85%] w-[85%] flex justify-center items-center">
            <h1 className="absolute top-0  left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-3 text-white font-orbitron text-[clamp(1rem,5cqw,12rem)]">
                Channels
            </h1>
                <div className="w-[80%] h-[80%] font-orbitron p-10 flex justify-between">
                    <div>
                        <h1 className="text-4xl pb-10 text-white text-[clamp(1.25rem,2.5vw,2.5rem)]">[ ESTABLISH UPLINK ]</h1>
                        <div className="text-3xl pl-10 text-[clamp(1rem,2vw,1.875rem)]">
                            <a href="mailto:cgarcia.software.tech@gmail.com" className="block pb-4 hover:text-cyan-400 hover:text-[2rem] cursor-pointer text-white">
                                ◉ EMAIL
                            </a>

                            <a href="https://www.linkedin.com/in/cindy-garcia-ba1684247" target="_blank" rel="noopener noreferrer" className="block pb-4 hover:text-cyan-400 hover:text-[2rem] cursor-pointer text-white">
                                ◈ LINKEDIN
                            </a>

                            <a href="https://github.com/CG166" target="_blank" rel="noopener noreferrer" className="block pb-4 hover:text-cyan-400 hover:text-[2rem] cursor-pointer text-white">
                                ▣ GITHUB
                            </a>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-4xl pb-10 text-white text-[clamp(1.25rem,2.5vw,2.5rem)]">[ ACCESS PERSONNEL FILE ]</h1>
                        <a href="/CGResume.pdf" target="_blank" rel="noopener noreferrer" className="block text-3xl pl-10 hover:text-cyan-400 hover:text-[2rem] cursor-pointer text-white text-[clamp(1rem,2vw,1.875rem)]">
                            ↓ RESUME
                        </a>
                    </div>
            
                </div>
            </div>
        </div>
        </main>
        
    )
}