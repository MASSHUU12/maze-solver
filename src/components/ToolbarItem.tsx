import { cellColor } from "@/helpers/cellColor";
import { gridStore } from "@/store/gridStore";

interface Props {
  color: cellColor;
  name: string;
}

export function ToolbarItem({ color, name }: Props) {
  function setSelectedColor() {
    gridStore.selectedColor = color;
  }

  return (
    <button
      onClick={setSelectedColor}
      class="flex flex-row justify-start items-center gap-2 p-3 border-2 border-gray-300 rounded-md">
      <div class={`w-8 h-8 rounded-md border-2 border-gray-300 ${color.color}`}></div>
      <span class="">{name}</span>
    </button>
  );
}
