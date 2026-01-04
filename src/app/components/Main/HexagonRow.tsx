import { GameMode } from "@/app/models/GameMode";
import { HexField } from "@/app/models/HexField";
import HexagonHex from "./HexagonHex";

interface HexagonRowProps {
  fields: HexField[];
  mode: GameMode;
}
export default function HexagonRow({ fields, mode }: HexagonRowProps) {
  return (
    <div className="flex flex-row w-full justify-center ">
      {fields.map((item, index) => (
        <HexagonHex key={index} hexField={item} mode={mode} />
      ))}
    </div>
  );
}
