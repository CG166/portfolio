'use client';


export default function Aboutme() {
    return(
        <main className="flex items-center justify-center h-[95vh] w-screen bg-blueblack">
            <div className="flex h-[90%] w-[85%]">
                <div className="flex flex-col h-full w-[40%] justify-between">
                    <h1 className="font-orbitron font-bold text-6xl p-4">Information</h1>
                    <img
                        src="/profpic.jpg"
                        alt="Profile picture"
                        className="w-[80%] h-[80%] object-cover border-4 border-cyberyellow rounded-2xl shadow-[0_0_4px_#facc15,0_0_10px_#facc1555]"
                    />
                </div>
                <div className="flex flex-col h-full w-[60%] text-xl font-orbitron bg-black justify-center items-center">
                    <div className="w-[95%] h-[95%] border flex flex-col">
                        <div className="flex justify-center border border-cyan-300 font-bold text-3xl p-3 text-white">
                        Profile
                        </div>
                        <div className="border border-cyan-300 flex-1 p-10 min-h-0 overflow-y-auto text-white">
                            <h1 className="font-bold text-2xl">Name</h1>
                            <h1 className="pb-5">Cindy Garcia</h1>
                            <h1 className="font-bold text-2xl">Degree</h1>
                            <h1 className="pb-5">Bachelor of Science, Computer Science</h1>
                            <h1 className="font-bold text-2xl" >Skills</h1>
                            <h1 className="py-2">Programming Languages: C, C++, Python, Kotlin, Java, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, SQL, PHP, Bash</h1>
                            <h1 className="py-2">Frameworks & Libraries: React.js, Next.js, OpenCV, MediaPipe</h1>
                            <h1 className="py-2">Operating Systems: Linux (Ubuntu, Kali), Windows</h1>
                            <h1 className="py-2">Database Systems: MySQL, PostgreSQL</h1>
                            <h1 className="pt-2 pb-5">Version Control & Deployment: Git, CI/CD Fundamentals, Vercel</h1>
                            <h1 className="font-bold text-2xl">Areas of Interest</h1>
                            <h1>Back-end Development, Automation, Machine Learning, Artificial Intelligence, Decision Systems</h1>
                        </div>
                    </div>
                </div>
                


            </div>
        </main>
    )
}