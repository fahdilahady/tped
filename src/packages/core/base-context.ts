import allure from '@wdio/allure-reporter';

export class BaseContext {
  id = process.env.PRODUCTID || ''
  url ='https://' +(process.env.URL);

  constructor() {
    allure.addArgument(this.id, this.url);
  }

  getID(){
    return process.env.PRODUCTID||'tokped';
  }
  start() {
    browser.navigateTo(this.url);

    allure.addStep('Open ' + this.url, {
      name: 'Page screenshot', content: Buffer.from(browser.takeScreenshot(), 'base64'), type: 'image/png'
    });
    if (process.env.INTERCEPTOR && !['0', 'false'].includes(process.env.INTERCEPTOR)) {
      browser.setupInterceptor()
    }
  }
}
