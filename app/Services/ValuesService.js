import STORE from "../store.js";

//Public
class VendingService {
  buy() {
    let item = STORE.State.VendingMachine;
    item.amount++;
    let cost = (item.amount * item.price).toFixed(2);
    return cost;
  }
}

const SERVICE = new VendingService();
export default SERVICE;
