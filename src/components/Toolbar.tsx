import { CellColor } from "@/helpers/cellColor";
import { ToolbarItem } from "./ToolbarItem";

export function Toolbar() {
  return (
    <section class="flex flex-col gap-2">
      <ToolbarItem color={CellColor.Passage} name="Passage" />
      <ToolbarItem color={CellColor.Wall} name="Wall" />
      <ToolbarItem color={CellColor.Start} name="Start" />
      <ToolbarItem color={CellColor.End} name="End" />
      <ToolbarItem color={CellColor.Chosen} name="Chosen" />
    </section>
  );
}
