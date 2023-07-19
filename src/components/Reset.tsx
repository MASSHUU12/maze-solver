import { VNode } from "preact";

import { Button } from "./common/Button";
import { resetGridStore } from "@/store/gridStore";

/**
 * Reset component.
 *
 * @returns {JSX.Element} The reset button component.
 */
export function Reset(): VNode {
  return (
    <Button action={resetGridStore}>
      <span>Reset</span>
    </Button>
  );
}
