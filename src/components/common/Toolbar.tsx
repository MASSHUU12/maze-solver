import { ComponentChildren, VNode } from "preact";

type Props = {
  children: ComponentChildren[] | ComponentChildren;
};

/**
 * Toolbar component.
 *
 * @param {Props} props - The props for the Toolbar component.
 * @returns {VNode} The rendered Toolbar component.
 */
export function Toolbar({ children }: Props): VNode {
  return <section class="flex flex-col gap-2">{children}</section>;
}
