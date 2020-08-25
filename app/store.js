import VendingMachine from "./Models/VendingMachine.js";

let _state = {
  // activeValue: new Value({ title: "Value" }),
  /** @type {VendingMachine} */
  chocolateStout: new VendingMachine(
    "Chocolate Stout",
    "assets/images/chocolate-stout.jpg",
    5,
    6.2,
    "Ledbury, United Kingdom"
  ),
  coffeePorter: new VendingMachine(
    "Coffee Porter",
    "assets/images/coffee-porter.jpg",
    4.5,
    5.3,
    "Dead Man's Gulch, Montana"
  ),
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
