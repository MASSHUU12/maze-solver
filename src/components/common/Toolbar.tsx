import { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren[] | ComponentChildren;
};

export function Toolbar({ children }: Props) {
  return <section class="flex flex-col gap-2">{children}</section>;
}
