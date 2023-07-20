import { ComponentChildren, VNode } from "preact";

type Props = {
  text: string;
  children: ComponentChildren;
};

export function Label({ text, children }: Props): VNode {
  return (
    <label class="flex flex-col">
      <span class="text-slate-700 text-sm font-semibold">{text}</span>
      {children}
    </label>
  );
}
