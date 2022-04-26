import { UIInteraction } from 'packages/core/ui-interaction';

export class sauceLabBaseUI extends UIInteraction{
  base = {
    cartButton : '//div[@id="shopping_cart_container"]/a',
    burgerMenuButton : '//button[@id="react-burger-menu-btn"]',
    sideBar : {
      allItem : '//a[@id="inventory_sidebar_link"]',
      about : '//a[@id="about_sidebar_link"]',
      logout : '//a[@id="logout_sidebar_link"]',
      resetAppState : '//a[@id="reset_sidebar_link"]',
    }
  }
  seeCart(){
    this.click($(this.base.cartButton)); return this;
  }
  logout(){
    this.click($(this.base.burgerMenuButton))
    this.click($(this.base.sideBar.logout))
    return this
  }
  navigateToInvetoryPage(){
    this.click($(this.base.burgerMenuButton))
    this.click($(this.base.sideBar.allItem));
    return this
  }
}
