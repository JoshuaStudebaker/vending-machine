import VMC from "./Controllers/VendingController.js";

class App {
  valuesController = new VMC();
}

window["app"] = new App();
