import { cellColor } from "@/helpers/cellColor";
import { gridStore } from "@/store/gridStore";
import { Button } from "./common/Button";

type Props = {
  color: cellColor;
  name: string;
};

export function ToolbarItem({ color, name }: Props) {
  function setSelectedColor() {
    gridStore.selectedColor = color;
  }

  return (
    <Button action={setSelectedColor}>
      <div class={`w-6 h-6 rounded-md border-2 border-gray-300 ${color.color}`}></div>
      <span>{name}</span>
    </Button>
  );
}
