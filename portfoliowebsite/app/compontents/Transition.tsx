'use client';

type SizeProp = {
    height: number;
};

export default function Transition({ height }: SizeProp) {
    return (
        <main>
            <div
                className="w-screen bg-blueblack"
                style={{ height: `${height}vh` }}
            />
        </main>
    );
}
