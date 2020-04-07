import { Store } from "pullstate";

const GlobalStore = new Store({
  isShowing: false,
});

export default GlobalStore;
