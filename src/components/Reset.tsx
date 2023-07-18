import { resetGridStore } from "@/store/gridStore";
import { Button } from "./common/Button";

export function Reset() {
  return (
    <Button action={resetGridStore}>
      <span>Reset</span>
    </Button>
  );
}
