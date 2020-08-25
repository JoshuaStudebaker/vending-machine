import STORE from "../store.js";

function _drawVM() {
  let VMDisplay = document.getElementById("vending-machine");
  // VMDisplay.innerHTML = STORE.State.chocolateStout.Template;
  let template = "";
  for (let i in STORE.State) {
    let item = STORE.State[i];
    template += item.Template;
  }
  VMDisplay.innerHTML = template;
}

//Public
export default class ValuesController {
  constructor() {
    _drawVM();
  }
}
