import * as QA from '@qa/core';
import { defineStep } from '@cucumber/cucumber';
import { chance } from '@qa/helper';

defineStep('User Login with credential {string} {string} {string}', function(this: QA.Core, username:string, password:string , secret:string){
  let ctx = this.getContext<QA.tokped.Context>(QA.tokped.Context)
  const email= (username) ?username :process.env.toped_email
  const pass= (password) ?password : process.env.toped_password
  const googleSecret = (secret) ?secret : process.env.toped_secret
  browser.navigateTo(ctx.url+'/login');

  this.getUI<QA.tokped.loginPage>(QA.tokped.loginPage)
    .submitLogin(email, pass, googleSecret)
});
