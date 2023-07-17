import { CellColor } from "@/helpers/cellColor";

interface Props {
  color: CellColor;
  name: string;
}

export function ToolbarItem({ color, name }: Props) {
  return (
    <button class="flex flex-row justify-start items-center gap-2 p-3 border-2 border-gray-300 rounded-md">
      <div class={`w-8 h-8 rounded-md border-2 border-gray-300 ${color}`}></div>
      <span class="">{name}</span>
    </button>
  );
}
