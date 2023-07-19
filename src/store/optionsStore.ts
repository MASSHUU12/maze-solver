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
  };
}

/**
 * The proxy object for the options store.
 *
 * @type {GridStore}
 */
export const optionsStore = proxy<OptionsStore>({
  options: {
    gridSize: 25,
  },
});
