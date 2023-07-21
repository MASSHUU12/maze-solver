import { ComponentChildren, VNode } from "preact";

type Props = {
  link: string;
  children: ComponentChildren;
};

/**
 * Link component renders an anchor element with the specified URL.
 *
 * @param {Props} props - The props object for the Link component.
 * @returns {VNode} A virtual DOM node representing the anchor element.
 */
export function Link({ link, children }: Props): VNode {
  return (
    <a href={link} target="_blank" rel="noreferrer" class="underline">
      {children}
    </a>
  );
}
