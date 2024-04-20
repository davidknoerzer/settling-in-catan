import { HexField } from "@/app/models/HexField";
import Image from "next/image";

export default function HexagonHex({ color, image, type, number }: HexField) {
    const textColor = number === 6 || number === 8 ? "text-red-600" : "text-black";
    return (
        <div className={"basis-12 sm:basis-20 sm:mx-0 md:basis-24 md:mx-0 lg:basis-28 lg:mx-0 xl:basis-36 mask mask-hexagon aspect-square p-2 grid grid-rows-3 " + color}>
            <Image className="sm:p-1 md:p-2 xl:p-2" src={image} alt={type} width={128} height={128} />
            {number !== 0 && (
                <div className="flex items-center justify-center mask mask-circle bg-white row-start-3">
                    <p className={"text-xxs sm:text-base lg:text-xl text-center font-bold " + textColor}>
                        {number}
                    </p>
                </div>
            )}
        </div>
    )
}