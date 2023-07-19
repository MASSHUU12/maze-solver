import { ComponentChildren, VNode, toChildArray } from "preact";

type Props = {
  action: () => unknown;
  children: ComponentChildren[] | ComponentChildren;
};

/**
 * Button component.
 *
 * @param {Props} props - The props for the Button component.
 * @returns {VNode} The rendered Button component.
 */
export function Button({ action, children }: Props): VNode {
  const childrenArray = toChildArray(children);

  return (
    <button
      onClick={action}
      class={
        "flex flex-row items-center " +
        `${childrenArray.length > 1 ? "justify-start" : "justify-center"} ` +
        "gap-2 py-3 px-5 border-2 border-gray-300 rounded-md " +
        "hover:bg-slate-200 focus:bg-slate-200"
      }>
      {children}
    </button>
  );
}
