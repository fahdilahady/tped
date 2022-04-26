import { UIInteraction } from 'packages/core/ui-interaction'

export class loginPage extends UIInteraction{
  elements = {
    usernameField : '//input[@data-test="username"]',
    passwordField : '//input[@data-test="password"]',
    loginButton : '//input[@type="submit"][@data-test="login-button"]',
    errorMessage: '//div[@class="error-message-container error"]/*/text()',
  }

  setUsername(username:string){
    if (username){
      this.enter($(this.elements.usernameField), username)
    }
    return this
  }
  setPassword(password:string){
    if (password){
      this.enter($(this.elements.passwordField), password)
    }
    return this
  }

  submitLogin(username='', password=''){
    this.setUsername(username)
    this.setPassword(password)
    this.click($(this.elements.loginButton))
    return this
  }

  validateLogin({expectError=false, error='Epic sadface: Sorry, this user has been locked out.'}){
    if (expectError){
      const elem = $(this.elements.errorMessage)
      if (elem.isDisplayed()){
        return this.expect(this.elements.errorMessage, `expected error is: ${error}`).toHaveTextContaining(error)
      }
    }else{
      return expect(browser).toHaveUrlContaining('inventory.html')
    }
  }
}
