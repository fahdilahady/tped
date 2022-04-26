import * as QA from '@qa/core';
import { defineStep } from '@cucumber/cucumber';
import { sortItemBy } from 'packages/core/sauce/ui/inventory.page';

function getMyContext(this:QA.Core){
  return this.getContext<QA.sauce.Context>(QA.sauce.Context)
}
defineStep('validate url {string}', function(this:QA.Core, expectedURL:string){
  getMyContext.call(this)
  expect(browser).toHaveUrlContaining(expectedURL)
})

defineStep('SauceLab Login {string}  {string}', function(this: QA.Core, username:string, password:string){
  getMyContext.call(this)
  this.getUI<QA.sauce.loginPage>(QA.sauce.loginPage)
    .submitLogin(username, password)
})

defineStep('Verify that you are logged in to the application', function(this:QA.Core){
  this.getUI<QA.sauce.loginPage>(QA.sauce.loginPage)
    .validateLogin({expectError:false})
})

defineStep('Sort the products by the highest price', function(this:QA.Core){
  getMyContext.call(this)
  this.getUI<QA.sauce.inventoryPage>(QA.sauce.inventoryPage)
    .validatePageTitle('Products')
    .sortItem(sortItemBy.hilo)
})

defineStep('Verify the results to match with your query', function(this:QA.Core){
  getMyContext.call(this)
  this.getUI<QA.sauce.inventoryPage>(QA.sauce.inventoryPage)
    .validateSelectedSortOption()
})

defineStep('Select and open by index {string}', function(this:QA.Core, index:string){
  getMyContext.call(this)
  const ui =this.getUI<QA.sauce.inventoryPage>(QA.sauce.inventoryPage)
    .selectItemByIndex(parseInt(index))
  this.data.set('selectedItemDetails', ui.getSelectedItemDetails())
})

defineStep('Verify selected item details', function(this:QA.Core){
  getMyContext.call(this)
  this.getUI<QA.sauce.itemDetailsPage>(QA.sauce.itemDetailsPage)
    .validateSelectedSelectedItemDetails(this.data.get('selectedItemDetails'))
})

defineStep('Buy the selected product', function(this:QA.Core){
  getMyContext.call(this)
  this.getUI<QA.sauce.itemDetailsPage>(QA.sauce.itemDetailsPage)

})
