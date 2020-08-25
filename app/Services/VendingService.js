import STORE from "../store.js";

//Public
class VMService {
  buy(id) {
    for (let i in STORE.State) {
      let item = STORE.State[i];
      if (id == item.id) {
        item.amount++;
      }
      return item.amount;
    }
  }
}
const SERVICE = new VMService();
export default SERVICE;
