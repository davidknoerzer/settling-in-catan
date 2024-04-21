import { HexField } from "@/app/models/HexField";
import HexagonHex from "./HexagonHex";
import { GameMode } from "@/app/models/GameMode";

interface HexagonRowProps {
  fields: HexField[];
  mode: GameMode;
}
export default function HexagonRow({ fields, mode }: HexagonRowProps) {
  return (
    <div className="flex justify-center -my-2 sm:-my-3.5 md:-my-4 lg:-my-5">
      {fields.map((item, index) => (
        <HexagonHex key={index} hexField={item} mode={mode} />
      ))}
    </div>
  );
}
