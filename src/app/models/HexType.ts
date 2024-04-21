import brickImage from "../../../public/brick.svg"
import desertImage from "../../../public/desert.svg"
import oreImage from "../../../public/mountain.svg"
import sheepImage from "../../../public/sheep.svg"
import waterImage from "../../../public/water.svg"
import wheatImage from "../../../public/wheat.svg"
import woodImage from "../../../public/wood.svg"
import fishImage from "../../../public/fish.svg"
import { StaticImageData } from "next/image"

export enum HexType {
    BRICK = "Brick",
    DESERT = "Desert",
    ORE = "Ore",
    SHEEP = "Sheep",
    WATER = "Water",
    WHEAT = "Wheat",
    WOOD = "Wood",
    FISH = "Fish",
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
    { hexType: HexType.WOOD, color: 'bg-green-900' },
    { hexType: HexType.FISH, color: 'bg-blue-700' },
];

export const hexTypeImages: HexTypeImagePair[] = [
    { hexType: HexType.BRICK, image: brickImage },
    { hexType: HexType.DESERT, image: desertImage },
    { hexType: HexType.ORE, image: oreImage },
    { hexType: HexType.SHEEP, image: sheepImage },
    { hexType: HexType.WATER, image: waterImage },
    { hexType: HexType.WHEAT, image: wheatImage },
    { hexType: HexType.WOOD, image: woodImage },
    { hexType: HexType.FISH, image: fishImage },
];

export function getColorByHexType(hexType: HexType): string | undefined {
    const pair = hexTypeColors.find(pair => pair.hexType === hexType);
    return pair?.color;
}

export function getImageByHexType(hexType: HexType): StaticImageData | undefined {
    const pair = hexTypeImages.find(pair => pair.hexType === hexType);
    return pair?.image;
}