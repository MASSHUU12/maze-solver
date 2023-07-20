import { proxy } from "valtio";

interface StatusStore {
  status: string;
}

export const statusStore: StatusStore = proxy<StatusStore>({
  status: "",
});
