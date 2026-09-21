'use client';

type TechProp = {
    tech: string;
};

export default function Techbubble({tech} : TechProp) {
    return (
        <div className="w-fit bg-cyberyellow rounded-full px-3 py-2 font-blackOpsOne text-blueblack">
         {tech}
        </div>
    )
}