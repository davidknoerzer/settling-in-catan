import { HexField } from "@/app/models/HexField";
import HexagonHex from "./HexagonHex";

interface HexagonRowProps {
    fields: HexField[];
}
export default function HexagonRow({ fields }: HexagonRowProps) {
    return (
        <div className="flex justify-center -my-1 sm:-my-1 md:-my-1 lg:-my-2 xl:-my-3 2xl:-my-3">
            {fields.map((field, index) => (
                <HexagonHex key={index} {...field} />
            ))}
        </div>
    )
}