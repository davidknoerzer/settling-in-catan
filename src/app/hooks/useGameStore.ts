"use client";

import {
  GameMode,
  hexPerRowPerGame,
  hexTypePerGameMode,
  numbersPoolPerGameMode,
} from "@/app/models/GameMode";
import { HexField } from "@/app/models/HexField";
import {
  HexType,
  getColorByHexType,
  getImageByHexType,
} from "@/app/models/HexType";
import { useCallback, useEffect, useState } from "react";
import desertImage from "../../../public/desert.svg";

export function useGameStore() {
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.CLASSIC);
  const [fieldList, setFieldList] = useState<HexField[][]>([]);

  const generateBoard = useCallback(() => {
    const hexTypesArray = Object.entries(hexTypePerGameMode[gameMode]).flatMap(
      ([hexType, count]) =>
        Array.from({ length: count }, () => hexType as HexType)
    );

    const numbersArray = shuffle([...numbersPoolPerGameMode[gameMode]]);
    const readyHexTypes = shuffle(hexTypesArray);

    const tempFields: HexField[] = [];

    readyHexTypes.forEach((item) => {
      const image = getImageByHexType(item) ?? desertImage;
      const color = getColorByHexType(item) ?? "bg-amber-300";

      if (
        item === HexType.DESERT ||
        item === HexType.WATER ||
        item === HexType.FISH
      ) {
        tempFields.push({ image, color, number: 0, type: item });
      } else {
        const number = numbersArray.pop();
        if (number !== undefined) {
          tempFields.push({ image, color, number, type: item });
        }
      }
    });

    setFieldList(splitByPattern(tempFields, hexPerRowPerGame[gameMode]));
  }, [gameMode]); // <-- only depends on gameMode

  useEffect(() => {
    generateBoard();
  }, [generateBoard]); // <-- now safe

  return {
    gameMode,
    setGameMode,
    fieldList,
    regenerateBoard: generateBoard,
  };
}

function shuffle<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

function splitByPattern<T>(array: T[], pattern: number[]) {
  let pos = 0;
  return pattern.map((size) => array.slice(pos, (pos += size)));
}
