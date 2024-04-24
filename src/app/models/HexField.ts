import { StaticImageData } from "next/image";
import { HexType } from "./HexType";

export interface HexField {
  image: StaticImageData;
  color: string;
  number: number;
  type: HexType;
}
