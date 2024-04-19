import { HexField } from "@/app/models/HexField";
import HexagonHex from "./HexagonHex";

interface HexagonRowProps {
    fields: HexField[];
}
export default function HexagonRow({ fields }: HexagonRowProps) {
    return (
        <div className="flex justify-center items-center">
            {fields.map((field, index) => (
                <HexagonHex key={index} {...field} />
            ))}
        </div>
    )
}