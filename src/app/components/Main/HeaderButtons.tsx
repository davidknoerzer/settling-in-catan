"use client";
import { GameMode } from "@/app/models/GameMode";
import { useGame } from "../GameProvider";

export default function HeaderButtonSection() {
  const { gameMode, setGameMode, regenerateBoard } = useGame();

  return (
    <>
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">
          {gameMode}
        </div>
        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          {Object.values(GameMode).map((mode) => (
            <li key={mode}>
              <button
                className="w-full text-left"
                onClick={() => setGameMode(mode)}
              >
                {mode}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button className="btn btn-circle" title="Redo" onClick={regenerateBoard}>
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
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{" "}
      </button>
    </>
  );
}
