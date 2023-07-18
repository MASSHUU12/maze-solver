import { proxy } from "valtio";

interface OptionsStore {
  options: {
    [key: string]: string | number;
    gridSize: number;
  };
}

export const optionsStore = proxy<OptionsStore>({
  options: {
    gridSize: 25,
  },
});
