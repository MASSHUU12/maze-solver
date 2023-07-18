import { Maze } from "./components/Maze";
import { Toolbar } from "./components/Toolbar";

export function App() {
  return (
    <>
      <section class="flex flex-row justify-center items-center gap-5">
        <Maze />
        <Toolbar />
      </section>
    </>
  );
}
