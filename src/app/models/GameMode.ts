import { HexType } from "./HexType";

export enum GameMode {
  CLASSIC = "Classic",
  SEAFARER = "Seafarer",
  SEAFARER_FISH = "Fishies",
  LARGE = "Large"
}

export const numbersPoolPerGameMode = {
  [GameMode.CLASSIC]: [
    2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12,
  ],
  [GameMode.SEAFARER]: [
    2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 8, 8, 8, 9, 9, 9, 9, 10, 10,
    10, 10, 11, 11, 11, 12,
  ],
  [GameMode.SEAFARER_FISH]: [
    2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 8, 8, 8, 9, 9, 9, 9, 10, 10,
    10, 10, 11, 11, 11, 12,
  ],
  [GameMode.LARGE]: [
    2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10,
    10, 10, 11, 11, 11, 12,
  ],
};
export const hexTypePerGameMode = {
  [GameMode.CLASSIC]: {
    [HexType.BRICK]: 3,
    [HexType.DESERT]: 1,
    [HexType.ORE]: 3,
    [HexType.SHEEP]: 4,
    [HexType.WHEAT]: 4,
    [HexType.WOOD]: 4,
  },
  [GameMode.SEAFARER]: {
    [HexType.BRICK]: 6,
    [HexType.ORE]: 6,
    [HexType.SHEEP]: 6,
    [HexType.WATER]: 19,
    [HexType.WHEAT]: 6,
    [HexType.WOOD]: 6,
  },
  [GameMode.SEAFARER_FISH]: {
    [HexType.BRICK]: 6,
    [HexType.ORE]: 6,
    [HexType.SHEEP]: 6,
    [HexType.WATER]: 17,
    [HexType.WHEAT]: 6,
    [HexType.WOOD]: 6,
    [HexType.FISH]: 2,
  },
  [GameMode.LARGE]: {
    [HexType.BRICK]: 6,
    [HexType.ORE]: 7,
    [HexType.SHEEP]: 7,
    [HexType.WATER]: 15,
    [HexType.WHEAT]: 7,
    [HexType.WOOD]: 7,
  },
};

export const hexPerRowPerGame = {
  [GameMode.CLASSIC]: [3, 4, 5, 4, 3],
  [GameMode.SEAFARER]: [6, 7, 8, 7, 8, 7, 6],
  [GameMode.SEAFARER_FISH]: [6, 7, 8, 7, 8, 7, 6],
  [GameMode.LARGE]: [6, 7, 8, 7, 8, 7, 6],
};
