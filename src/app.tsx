import { Maze } from "./components/Maze";
import { Clean } from "./components/Clean";
import { Reset } from "./components/Reset";
import { Solve } from "./components/Solve";
import { Options } from "./components/Options";
import { TypePicker } from "./components/TypePicker";
import { Status } from "./components/Status";

/**
 * The main App component.
 *
 * @returns {JSX.Element} The rendered App component.
 */
export function App() {
  return (
    <>
      <section class="flex justify-center">
        <h1 class="text-3xl my-5">Maze Solver</h1>
      </section>
      <section class="flex flex-row justify-center items-center gap-5">
        <Options />
        <Maze />
        <TypePicker />
      </section>
      <section class="flex flex-col items-center mt-5 gap-2">
        <Status />
        <div class="flex justify-center gap-5">
          <Solve />
          <Clean />
          <Reset />
        </div>
      </section>
    </>
  );
}
