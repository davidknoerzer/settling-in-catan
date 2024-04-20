import { HexField } from "@/app/models/HexField";
import HexagonHex from "./HexagonHex";

interface HexagonRowProps {
  fields: HexField[];
}
export default function HexagonRow({ fields }: HexagonRowProps) {
  return (
    <div className="flex justify-center -my-2 sm:-my-3.5 md:-my-4 lg:-my-5">
      {fields.map((field, index) => (
        <HexagonHex key={index} {...field} />
      ))}
    </div>
  );
}
