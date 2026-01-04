"use client";

import { createContext, useContext } from "react";
import { useGameStore } from "../hooks/useGameStore";

const GameContext = createContext<ReturnType<typeof useGameStore> | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const store = useGameStore();
  return <GameContext.Provider value={store}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used inside GameProvider");
  return ctx;
}
