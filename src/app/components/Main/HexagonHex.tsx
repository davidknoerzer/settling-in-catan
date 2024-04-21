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
      ? "p-2 sm:p-4 basis-16 sm:basis-20 md:basis-28 lg:basis-36 xl:basis-40 mx-0.5 sm:mx-0.5 md:mx-0.5 lg:mx-1"
      : "p-2 sm:p-3 md:p-4 xl:p-6 basis-10 sm:basis-16 md:basis-20 lg:basis-28 xl:basis-36 mx-0.5 sm:mx-0.5 md:mx-0.5 lg:mx-0.5";
  const textColor =
    number === 6 || number === 8 ? "text-red-600" : "text-black";
  return (
    <>
      <div className={hexagonCss + " mask mask-hexagon " + color}>
        {number !== 0 ? (
          <>
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
          </>
        ) : (
          <div className="flex align-middle items-center justify-center">
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
