import { GameProvider } from "./components/GameProvider";
import Main from "./components/Main/Main";

export default function Home() {
  return (
    <GameProvider>
      <Main />
    </GameProvider>
  );
}
