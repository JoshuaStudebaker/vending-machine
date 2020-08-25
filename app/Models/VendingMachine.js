export default class VendingMachine {
  constructor(product, image, price, alcohol, origin) {
    this.product = product;
    this.image = image;
    this.price = price;
    this.alcohol = alcohol;
    this.origin = origin;
    this.amount = 0
  }


// TODO add onclick buy path to button
  get Template() {
      
        let priceFormatted = this.price.toFixed(2);
    let priceString = priceFormatted.toString();
    let alcoholPercent = this.alcohol.toString() + "%"
      return `<div class="card" >
          <img class="card-img-top" src="..." alt="Card image cap">
              <div class="card-body">
                  <h5 class="card-title">${this.product} - ${alcoholPercent}</h5>
                  <p class="card-text">${priceString}</p>
                  <p>Origin: ${this.origin}</p>
                  <button type="button" onclick="(buy()" class="btn btn-primary">Buy</a>
              </div>
</div>
  }`
}
