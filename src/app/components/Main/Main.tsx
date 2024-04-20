"use client";

import { useState } from "react";
import {
  GameMode,
  hexPerRowPerGame,
  hexTypePerGameMode,
  numbersPoolPerGameMode,
} from "@/app/models/GameMode";
import HexagonRow from "./HexagonRow";
import { HexField } from "@/app/models/HexField";
import {
  HexType,
  getColorByHexType,
  getImageByHexType,
} from "@/app/models/HexType";
import desertImage from "../../../../public/desert.svg";

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Main() {
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.CLASSIC);
  const [fieldList, setFieldList] = useState<HexField[][]>([]);
  const handleGameModeChange = (mode: GameMode) => {
    setGameMode(mode);
  };

  const handleSubmitMapGenerator = () => {
    const hexTypesArray = Object.entries(hexTypePerGameMode[gameMode]).flatMap(
      ([hexType, count]) => Array.from({ length: count }, () => hexType)
    );
    const numbersArray = [...numbersPoolPerGameMode[gameMode]];

    let readyHexTypes = shuffle(hexTypesArray);
    let readyNumbers = shuffle(numbersArray);
    let tempFieldList: HexField[] = [];

    for (let i = readyHexTypes.length - 1; i >= 0; i--) {
      const item: HexType = readyHexTypes.pop();
      let image = getImageByHexType(item);
      let color = getColorByHexType(item);

      if (item === HexType.DESERT || item === HexType.WATER) {
        tempFieldList.push({
          image: image !== undefined ? image : desertImage,
          color: color !== undefined ? color : "bg-amber-300",
          number: 0,
          type: item,
        });
      } else {
        const number = readyNumbers.pop();
        if (number != undefined) {
          tempFieldList.push({
            image: image !== undefined ? image : desertImage,
            color: color !== undefined ? color : "bg-amber-300",
            number: number,
            type: item,
          });
        }
      }
    }

    setFieldList(
      splitArrayByPattern(tempFieldList, hexPerRowPerGame[gameMode])
    );
  };

  function splitArrayByPattern(array: any[], pattern: number[]) {
    let result = [];
    let position = 0;

    for (let size of pattern) {
      const slice = array.slice(position, position + size);
      result.push(slice);
      position += size;
    }
    return result;
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            {gameMode == "CLASSIC" ? "Classic" : "Seafarer"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li key={GameMode.CLASSIC}>
              <a onClick={() => handleGameModeChange(GameMode.CLASSIC)}>
                {GameMode.CLASSIC}
              </a>
            </li>
            <li key={GameMode.SEAFARER}>
              <a onClick={() => handleGameModeChange(GameMode.SEAFARER)}>
                {GameMode.SEAFARER}
              </a>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => handleSubmitMapGenerator()}
        >
          Generate Map
        </button>
      </div>
      <div className="flex flex-col pt-5">
        {fieldList.map((item, index) => (
          <HexagonRow key={index} fields={item} />
        ))}
      </div>
    </>
  );
}
