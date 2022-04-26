import assert from 'assert';
import { parseConfigFileTextToJson } from 'typescript';
import { sauceLabBaseUI } from './base.ui';

export enum sortItemBy{
  az = 0,za = 1,
  lohi = 2, hilo = 3
}
export type itemDetails ={
  itemLabel : string,
  itemDescription : string,
  itemPrice : string,
}
export class inventoryPage extends sauceLabBaseUI{
  element = {
    ...this.base,
    pageTitle : '//span[@class="title"]', //Products
    inventoryList : '//div[@id="inventory_container"]/div[@class="inventory_list"]',
    inventoryItemByIndex : (index:number) => `//div[@id="inventory_container"]//div[@class="inventory_item"][${index}]`,
    inventoryAllItems : {
      price : '//div[@class="inventory_item_price"]/text()[2]',
      label : '//div[@class="inventory_item_label"]/a/div',
      description : '//div[@class="inventory_item_desc"]',
    },
    sortItemSelect : '//select[@data-test="product_sort_container"]',
    sortItemOption : (option:sortItemBy) => `//option[@value="${sortItemBy[option]}"]`
  }

  private set selectedSortOption(option : sortItemBy) {
    this.selectedSortOption = option;
  }
  private set selectedItemDetails(details: itemDetails){
    this.selectedItemDetails = details
  }

  validatePageTitle(title='Products'){
    this.expect(this.element.pageTitle, `expected title : ${title}`).toHaveTextContaining(title)
    return this
  }

  getSelectedItemDetails(){
    return this.selectedItemDetails
  }
  sortItem(option:sortItemBy){
    this.select($(this.element.sortItemSelect), this.element.sortItemOption(option), {selector:true})
    this.selectedSortOption = option
    return this
  }

  validateSelectedSortOption(option?:sortItemBy){
    option = (option) ?option :this.selectedSortOption;
    switch (option) {
      case sortItemBy.hilo:
        this.validateSortedByHighestPrice()
        break;
      default:
        //RFU (reserve for future use)
        break;
    }
    return this
  }

  protected validateSortedByHighestPrice(){
    let count = 0
    let lowPrice = 0
    let comparePrice = 0
    $(this.element.inventoryList).$$(this.element.inventoryAllItems.price).forEach(price =>{
      console.log(price)
      const _price = parseFloat(price.getText())
      comparePrice = (count == 0) ?_price : lowPrice
      lowPrice = (count == 0) ?_price :Math.min(lowPrice, _price)
      console.log(lowPrice)
      count++
      assert.ok(comparePrice>=lowPrice, `Sort by Price is failed: ${comparePrice} should greater than ${lowPrice}`)
    })
  }

  selectItemByIndex(index:number){
    const elm = $(this.element.inventoryItemByIndex(index))
    this.storeSelectedItemInfo(elm)
    this.click(elm.$(this.element.inventoryAllItems.label))
    return this
  }
  protected storeSelectedItemInfo(element:WebdriverIO.Element){
    const itemDetail : itemDetails = {
      itemLabel : element.$(this.element.inventoryAllItems.label).getText(),
      itemDescription : element.$(this.element.inventoryAllItems.description).getText(),
      itemPrice: element.$(this.element.inventoryAllItems.price).getText()
    }
    this.selectedItemDetails = itemDetail
  }

}
