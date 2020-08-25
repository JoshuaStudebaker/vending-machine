export default class VendingMachine {
  constructor(product, image, price, amount = 0) {
    this.product = product;
    this.image = image;
    this.price = price;
    this.amount = amount;
  }

    get Template() {
      
        let priceFormatted = this.price.toFixed(2);
        let priceString = priceFormatted.toString();
      return `<div class="card" >
          <img class="card-img-top" src="..." alt="Card image cap">
              <div class="card-body">
                  <h5 class="card-title">${this.product}</h5>
                  <p class="card-text">${priceString}</p>
                  <a href="#" class="btn btn-primary">Buy</a>
              </div>
</div>
  }`
}
