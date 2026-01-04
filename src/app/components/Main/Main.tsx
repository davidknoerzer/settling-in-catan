"use client";

import { useGame } from "../GameProvider";
import HeaderButtonSection from "./HeaderButtons";
import HexagonRow from "./HexagonRow";
import Info from "./Info";

export default function Main() {
  const { gameMode, fieldList } = useGame();

  return (
    <div className="container mx-auto">
      <Info mode={gameMode} />
      <div className="navbar">
        <div className="navbar-start">
          <h1 className="text-3xl p-1">Settling in Catan</h1>
          <button
            className="btn btn-circle"
            onClick={() => {
              const modal = document.getElementById(
                "info_modal"
              ) as HTMLDialogElement;
              if (modal) {
                modal.showModal();
              }
            }}
            title="Info"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 17V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx="1"
                cy="1"
                r="1"
                transform="matrix(1 0 0 -1 11 9)"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="navbar-end">
          <HeaderButtonSection />
        </div>
      </div>

      <div className="flex flex-col w-full">
        {fieldList.map((row, index) => (
          <div
            key={index}
            className={index > 0 ? "-mt-5 md:-mt-8 lg:-mt-9" : ""}
          >
            <HexagonRow fields={row} mode={gameMode} />
          </div>
        ))}
      </div>
    </div>
  );
}
