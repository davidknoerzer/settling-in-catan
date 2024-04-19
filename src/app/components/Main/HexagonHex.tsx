import { HexField } from "@/app/models/HexField";
import Image from "next/image";

export default function HexagonHex({ color, image, type, number }: HexField) {
    const textColor = number === 6 || number === 8 ? "text-red-600" : "text-black";
    return (
        <div className={"mask mask-hexagon aspect-square p-2 grid grid-rows-3 grid-flow-col " + color}>
            <Image className="p-4" src={image} alt={type} width={128} height={128} />
            {number !== 0 && (
                <div className="flex items-center justify-center mask mask-circle bg-white row-start-3 row-end-4">
                    <p className={"text-center font-bold text-xl " + textColor}>
                        {number}
                    </p>
                </div>
            )}
        </div>
    )
}