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
      ? "p-1.5 sm:p-3 basis-14 sm:basis-18 md:basis-24 lg:basis-32 xl:basis-36 mx-0.5 sm:mx-0.5 md:mx-0.5 lg:mx-1"
      : "p-1.5 sm:p-2 md:p-3 xl:p-5 basis-8 sm:basis-14 md:basis-18 lg:basis-24 xl:basis-32 mx-0.5 sm:mx-0.5 md:mx-0.5 lg:mx-0.5";

  const textColor =
    number === 6 || number === 8 ? "text-red-600" : "text-black";
  return (
    <>
      <div className={hexagonCss + " mask mask-hexagon " + color}>
        {number !== 0 ? (
          <div className="p-2">
            <Image src={image} alt={type} width={128} height={128} />
            <div className="flex items-center justify-center mask mask-circle bg-white">
              <p
                className={
                  "text-xxs sm:text-base lg:text-xl text-center font-bold " +
                  textColor
                }
              >
                {number}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex align-middle items-center justify-center p-4">
            <Image
              className=""
              src={image}
              alt={type}
              width={128}
              height={128}
            />
          </div>
        )}
      </div>
    </>
  );
}
