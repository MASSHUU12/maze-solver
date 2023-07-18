import { StateUpdater } from "preact/hooks";

type Props = {
  label: string;
  type?: HTMLInputElement["type"];
  placeholder?: string;
  state: string | number | string[] | undefined;
  stateUpdater: StateUpdater<string>;
};

export function OptionInput({ label, type = "text", placeholder = "", state, stateUpdater }: Props) {
  return (
    <>
      <label class="flex flex-col">
        <span class="text-slate-700 text-sm font-semibold">{label}</span>
        <input
          class="bg-slate-200 p-1 rounded-md"
          type={type}
          placeholder={placeholder}
          value={state}
          onInput={e => stateUpdater((e.target as HTMLInputElement).value)}
        />
      </label>
    </>
  );
}
