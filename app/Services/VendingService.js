import STORE from "../store.js";

//Public
class VMService {
  buy() {
    let item = STORE.State.VendingMachine;
    item.amount++;
    let cost = (item.amount * item.price).toFixed(2);
    return cost;
  }
}

const SERVICE = new VMService();
export default SERVICE;
