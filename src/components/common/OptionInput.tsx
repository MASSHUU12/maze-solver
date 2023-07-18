import { optionsStore } from "@/store/optionsStore";
import { useSnapshot } from "valtio";

type Props = {
  label: string;
  option: string;
  type?: HTMLInputElement["type"];
  placeholder?: string;
};

export function OptionInput({ label, type = "text", placeholder = "", option }: Props) {
  const options = useSnapshot(optionsStore.options);

  return (
    <>
      <label class="flex flex-col">
        <span class="text-slate-700 text-sm font-semibold">{label}</span>
        <input
          class="bg-slate-200 p-1 rounded-md"
          type={type}
          placeholder={placeholder}
          value={options[option]}
          onInput={e => (optionsStore.options[option] = (e.target as HTMLInputElement).value)}
        />
      </label>
    </>
  );
}
