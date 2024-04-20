import { HexField } from "@/app/models/HexField";
import Image from "next/image";

export default function HexagonHex({ color, image, type, number }: HexField) {
  const textColor =
    number === 6 || number === 8 ? "text-red-600" : "text-black";
  return (
    <>
      <div
        className={
          "p-4 basis-12 sm:basis-16 md:basis-20 lg:basis-28 xl:basis-36 mx-0.5 sm:mx-0.5 md:mx-0.5 lg:mx-0.5 mask mask-hexagon " +
          color
        }
      >
        {number !== 0 ? (
          <>
            <Image
              className=""
              src={image}
              alt={type}
              width={128}
              height={128}
            />
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
