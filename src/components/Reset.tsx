import { VNode } from "preact";

import { Button } from "./common/Button";
import { resetGridStore } from "@/store/gridStore";
import { optionsStore } from "@/store/optionsStore";

/**
 * Reset component.
 *
 * @returns {VNode} The reset button component.
 */
export function Reset(): VNode {
  function reset() {
    resetGridStore();
    optionsStore.options.template = "custom";
  }

  return (
    <Button action={reset}>
      <span>Reset</span>
    </Button>
  );
}
