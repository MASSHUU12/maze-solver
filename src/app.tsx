import { VNode } from "preact";

import { Maze } from "./components/Maze";
import { Clean } from "./components/Clean";
import { Reset } from "./components/Reset";
import { Solve } from "./components/Solve";
import { Status } from "./components/Status";
import { Footer } from "./components/Footer";
import { Options } from "./components/Options";
import { TypePicker } from "./components/TypePicker";

/**
 * The main App component.
 *
 * @returns {VNode} The rendered App component.
 */
export function App(): VNode {
  return (
    <>
      <div class="min-h-screen">
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
      </div>
      <Footer />
    </>
  );
}
