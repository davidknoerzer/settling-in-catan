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
import { useEffect, useState } from "react";
import desertImage from "../../../../public/desert.svg";
import HexagonRow from "./HexagonRow";

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

  useEffect(() => {
    handleSubmitMapGenerator();
  }, [gameMode]);

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
    <div className="flex flex-col max-h-screen bg-base-100">
      <div className="navbar">
        <div className="navbar-start">
          <h1 className="text-3xl">Settling in Catan</h1>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">
              {gameMode}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li key={GameMode.CLASSIC}>
                <a
                  onClick={() => {
                    setGameMode(GameMode.CLASSIC);
                  }}
                >
                  {GameMode.CLASSIC}
                </a>
              </li>
              <li key={GameMode.SEAFARER}>
                <a
                  onClick={() => {
                    setGameMode(GameMode.SEAFARER);
                  }}
                >
                  {GameMode.SEAFARER}
                </a>
              </li>
            </ul>
          </div>
          <button
            className="btn btn-circle"
            onClick={() => handleSubmitMapGenerator()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                id="Vector"
                d="M13.9998 8H18.9998V3M18.7091 16.3569C17.7772 17.7918 16.4099 18.8902 14.8079 19.4907C13.2059 20.0913 11.4534 20.1624 9.80791 19.6937C8.16246 19.225 6.71091 18.2413 5.66582 16.8867C4.62073 15.5321 4.03759 13.878 4.00176 12.1675C3.96593 10.4569 4.47903 8.78001 5.46648 7.38281C6.45392 5.98561 7.86334 4.942 9.48772 4.40479C11.1121 3.86757 12.8661 3.86499 14.4919 4.39795C16.1177 4.93091 17.5298 5.97095 18.5209 7.36556"
                stroke="#000000"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-full ">
        {fieldList.map((item, index) => (
          <div
            key={index}
            className={index > 0 ? "-mt-4 sm:-mt-8 lg:-mt-10" : ""}
          >
            <HexagonRow fields={item} mode={gameMode} />
          </div>
        ))}
      </div>
    </div>
  );
}
