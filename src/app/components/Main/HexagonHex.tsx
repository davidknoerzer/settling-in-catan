import { HexField } from "@/app/models/HexField";
import Image from "next/image";

export default function HexagonHex(field: HexField) {
    return (
        <>
            <h1 className="">{field.number}</h1>
            <Image className={"mask mask-hexagon p-10 " + field.color} src={field.image} alt={field.type} width={128} height={128} />

        </>
    )
}