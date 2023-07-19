import { ToolbarItem } from "./TypeItem";
import { Toolbar } from "./common/Toolbar";
import { CellColor } from "@/helpers/cellColor";

export function TypePicker() {
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
