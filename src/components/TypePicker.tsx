import { VNode } from "preact";

import { ToolbarItem } from "./TypeItem";
import { Toolbar } from "./common/Toolbar";
import { CellColor } from "@/helpers/cellColor";

/**
 * Renders a type picker toolbar component.
 *
 * @returns {VNode} The rendered toolbar component.
 */
export function TypePicker(): VNode {
  return (
    <Toolbar>
      <ToolbarItem color={CellColor.Passage} name="Passage" />
      <ToolbarItem color={CellColor.Wall} name="Wall" />
      <ToolbarItem color={CellColor.Start} name="Start" />
      <ToolbarItem color={CellColor.End} name="End" />
      <ToolbarItem color={CellColor.Chosen} name="Chosen" />
    </Toolbar>
  );
}
