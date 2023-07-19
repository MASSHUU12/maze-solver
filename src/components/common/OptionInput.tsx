import { optionsStore } from "@/store/optionsStore";
import { useSnapshot } from "valtio";

type Props = {
  label: string;
  option: string;
  type?: HTMLInputElement["type"];
  placeholder?: string;
  min?: number;
  max?: number;
};

export function OptionInput({ label, type = "text", placeholder = "", option, min = 0, max = 64 }: Props) {
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
