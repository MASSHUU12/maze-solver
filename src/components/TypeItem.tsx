import { VNode } from "preact";

import { Button } from "./common/Button";
import { gridStore } from "@/store/gridStore";
import { cellColor } from "@/helpers/cellColor";

/**
 * Props for the ToolbarItem component.
 *
 * @typedef {Object} Props
 * @property {cellColor} color - The color of the toolbar item.
 * @property {string} name - The name of the toolbar item.
 */
type Props = {
  color: cellColor;
  name: string;
};

/**
 * ToolbarItem component.
 *
 * @param {Props} props - The props for the ToolbarItem component.
 * @returns {VNode} The rendered ToolbarItem component.
 */
export function ToolbarItem({ color, name }: Props): VNode {
  /**
   * Sets the selected color in the grid store.
   * @returns {void}
   */
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
