import brickImage from "../../../public/brick.svg"
import desertImage from "../../../public/desert.svg"
import oreImage from "../../../public/mountain.svg"
import sheepImage from "../../../public/sheep.svg"
import waterImage from "../../../public/water.svg"
import wheatImage from "../../../public/wheat.svg"
import woodImage from "../../../public/wood.svg"
import { StaticImageData } from "next/image"

export enum HexType {
    BRICK = "BRICK",
    DESERT = "DESERT",
    ORE = "ORE",
    SHEEP = "SHEEP",
    WATER = "WATER",
    WHEAT = "WHEAT",
    WOOD = "WOOD"
}

type HexTypeColorPair = {
    hexType: HexType;
    color: string;
}
type HexTypeImagePair = {
    hexType: HexType;
    image: StaticImageData;
}

export const hexTypeColors: HexTypeColorPair[] = [
    { hexType: HexType.BRICK, color: 'bg-amber-700' },
    { hexType: HexType.DESERT, color: 'bg-amber-200' },
    { hexType: HexType.ORE, color: 'bg-slate-300' },
    { hexType: HexType.SHEEP, color: 'bg-green-500' },
    { hexType: HexType.WATER, color: 'bg-blue-400' },
    { hexType: HexType.WHEAT, color: 'bg-yellow-500' },
    { hexType: HexType.WOOD, color: 'bg-green-900' }
];

export const hexTypeImages: HexTypeImagePair[] = [
    { hexType: HexType.BRICK, image: brickImage },
    { hexType: HexType.DESERT, image: desertImage },
    { hexType: HexType.ORE, image: oreImage },
    { hexType: HexType.SHEEP, image: sheepImage },
    { hexType: HexType.WATER, image: waterImage },
    { hexType: HexType.WHEAT, image: wheatImage },
    { hexType: HexType.WOOD, image: woodImage }
];

export function getColorByHexType(hexType: HexType): string | undefined {
    const pair = hexTypeColors.find(pair => pair.hexType === hexType);
    return pair?.color;
}

export function getImageByHexType(hexType: HexType): StaticImageData | undefined {
    const pair = hexTypeImages.find(pair => pair.hexType === hexType);
    return pair?.image;
}