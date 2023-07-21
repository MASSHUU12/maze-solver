import { ComponentChildren, VNode } from "preact";

type Props = {
  link: string;
  children: ComponentChildren;
};

export function Link({ link, children }: Props): VNode {
  return (
    <a href={link} target="_blank" rel="noreferrer" class="underline">
      {children}
    </a>
  );
}
