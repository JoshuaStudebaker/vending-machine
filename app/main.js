import VendingController from "./Controllers/VendingController.js";

class App {
  valuesController = new VendingController();
}

window["app"] = new App();
