import { proxy } from "valtio";

/**
 * Represents the options store.
 *
 *  @interface
 */
interface OptionsStore {
  options: {
    [key: string]: string | number;
    gridSize: number;
    template: string;
  };
}

/**
 * The proxy object for the options store.
 *
 * @type {OptionsStore}
 */
export const optionsStore: OptionsStore = proxy<OptionsStore>({
  options: {
    gridSize: 25,
    template: "custom",
  },
});
