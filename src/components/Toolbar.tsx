import { CellColor } from "@/helpers/cellColor";
import { ToolbarItem } from "./ToolbarItem";
import { Button } from "./common/Button";
import { resetGridStore } from "@/store/gridStore";

export function Toolbar() {
  return (
    <section class="flex flex-col gap-2">
      <ToolbarItem color={CellColor.Passage} name="Passage" />
      <ToolbarItem color={CellColor.Wall} name="Wall" />
      <ToolbarItem color={CellColor.Start} name="Start" />
      <ToolbarItem color={CellColor.End} name="End" />
      <ToolbarItem color={CellColor.Chosen} name="Chosen" />

      <Button action={resetGridStore}>
        <span>Reset maze</span>
      </Button>
    </section>
  );
}
