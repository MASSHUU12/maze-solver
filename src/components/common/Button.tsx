import { ComponentChildren } from "preact";

type Props = {
  action: () => unknown;
  children: ComponentChildren;
};

export function Button({ action, children }: Props) {
  return (
    <button
      onClick={action}
      class="flex flex-row justify-start items-center gap-2 p-3 border-2 border-gray-300 rounded-md">
      {children}
    </button>
  );
}
