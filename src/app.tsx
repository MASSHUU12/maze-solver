import { Maze } from "./components/Maze";
import { Solve } from "./components/Solve";
import { TypePicker } from "./components/TypePicker";

export function App() {
  return (
    <>
      <section class="flex justify-center">
        <h1 class="text-3xl my-5">Maze Solver</h1>
      </section>
      <section class="flex flex-row justify-center items-center gap-5">
        <Maze />
        <TypePicker />
      </section>
      <section class="flex justify-center mt-3">
        <Solve />
      </section>
    </>
  );
}
