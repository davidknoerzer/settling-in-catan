import { GameMode } from "@/app/models/GameMode";
import { HexField } from "@/app/models/HexField";
import Image from "next/image";

interface HexagonHexProps {
  hexField: HexField;
  mode: GameMode;
}

export default function HexagonHex({ hexField, mode }: HexagonHexProps) {
  const { color, image, type, number } = hexField;

  const hexagonCss =
    mode === GameMode.CLASSIC
      ? "p-2 sm:p-4 md:p-6 basis-14 sm:basis-18 md:basis-24 lg:basis-32 xl:basis-36"
      : "p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 basis-8 sm:basis-14 md:basis-18 lg:basis-24 xl:basis-32";

  const textColor =
    number === 6 || number === 8 ? "text-red-600" : "text-black";
  return (
    <div
      className={
        hexagonCss +
        " mask mask-hexagon flex flex-col items-center justify-center " +
        color
      }
    >
      <Image className="p-1" src={image} alt={type} width={128} height={128} />
      {number !== 0 ? (
        <div className="flex items-center justify-center mask mask-circle md:h-[24px] md:w-[24px] h-[16px] w-[16px] bg-white">
          <p
            className={
              "text-xs sm:text-sm md:text-base lg:text-lg text-center font-bold " +
              textColor
            }
          >
            {number}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
