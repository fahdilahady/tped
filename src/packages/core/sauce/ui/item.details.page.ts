import { sauceLabBaseUI } from './base.ui';
import { itemDetails } from './inventory.page';

export class itemDetailsPage extends sauceLabBaseUI{
  element= {
    ...this.base,
    item : {
      label : '//div[contains(@class,"inventory_details_name")]',
      description : '//div[contains(@class,"inventory_details_desc")]',
      price:'//div[@class="inventory_details_price"]',
    },
    addToCartButton : '//button[@data-test="add-to-cart-sauce-labs-backpack"]',
    removeFromCartButton :'//button[@data-test="remove-sauce-labs-backpack"]',
  }
  validateSelectedSelectedItemDetails(details : itemDetails){
    this.expect(this.element.item.label, `expected label is : ${details.itemLabel}`).toHaveTextContaining(details.itemLabel)
    this.expect(this.element.item.description, `expected label is : ${details.itemDescription}`).toHaveTextContaining(details.itemDescription)
    this.expect(this.element.item.price, `expected label is : ${details.itemPrice}`).toHaveTextContaining(details.itemPrice)
  }

  buyProduct(){
    this.click($(this.element.addToCartButton))
    return this
  }

  validateAddedToCart(){
    this.expect(this.element.removeFromCartButton, 'remove button should presented').toBePresent()
    this.expect(this.element.removeFromCartButton, 'expected remove button text is "Remove"').toHaveTextContaining('Remove')
    return this
  }

  validateCartContent(){
    this.seeCart()
  }
}
