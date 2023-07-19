import { VNode } from "preact";
import { useSnapshot } from "valtio";

import { optionsStore } from "@/store/optionsStore";

type Props = {
  label: string;
  option: string;
  type?: HTMLInputElement["type"];
  placeholder?: string;
  min?: number;
  max?: number;
};

/**
 * OptionInput component.
 *
 * @param {Props} props - The props for the component.
 * @returns {VNode} The rendered component.
 */
export function OptionInput({ label, type = "text", placeholder = "", option, min = 0, max = 64 }: Props): VNode {
  const options = useSnapshot(optionsStore.options);

  return (
    <>
      <label class="flex flex-col">
        <span class="text-slate-700 text-sm font-semibold">{label}</span>
        <input
          class="bg-slate-200 p-1 rounded-md hover:bg-slate-100 focus:bg-slate-100"
          type={type}
          placeholder={placeholder}
          value={options[option]}
          onInput={e => (optionsStore.options[option] = (e.target as HTMLInputElement).value)}
          min={min}
          max={max}
        />
      </label>
    </>
  );
}
