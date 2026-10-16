'use client';

type SizeProp = {
    height: number;
};

export default function Transition({ height }: SizeProp) {
    return (
        <div
            className="w-screen bg-blueblack"
            style={{ height: `min(${height}vh, ${height}vw)` }}
        />
    );
}
