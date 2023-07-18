import { StateUpdater } from "preact/hooks";

type Props = {
  type?: HTMLInputElement["type"];
  placeholder?: string;
  state: string | number | string[] | undefined;
  stateUpdater: StateUpdater<string>;
};

export function Input({ type = "text", placeholder = "", state, stateUpdater }: Props) {
  return (
    <input
      class="bg-slate-200 p-1 rounded-md"
      type={type}
      placeholder={placeholder}
      value={state}
      onInput={e => stateUpdater((e.target as HTMLInputElement).value)}
    />
  );
}
