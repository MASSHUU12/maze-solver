import { proxy } from "valtio";

interface OptionsStore {
  gridSize: number;
}

export const optionsStore = proxy<OptionsStore>({
  gridSize: 25,
});
