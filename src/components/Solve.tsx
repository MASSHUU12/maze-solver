import { Button } from "./common/Button";

export function Solve() {
  function solve() {
    console.log("Solve");
  }

  return (
    <Button action={solve}>
      <span>Solve</span>
    </Button>
  );
}
