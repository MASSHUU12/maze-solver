import { VNode } from "preact";
import { Link } from "./common/Link";

/**
 * Represents the footer component.
 *
 * @returns {VNode} The virtual DOM representation of the footer component.
 */
export function Footer(): VNode {
  return (
    <footer class="p-3 bg-slate-200 flex flex-col">
      <Link link="https://github.com/MASSHUU12/maze-solver">Source code</Link>
      <Link link="https://masshuu12.github.io/">Portfolio</Link>
      <p>
        Licensed under <Link link="https://github.com/MASSHUU12/maze-solver/blob/master/LICENSE">MIT license</Link>.
      </p>
    </footer>
  );
}
