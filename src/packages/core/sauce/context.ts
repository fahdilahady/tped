import { BaseContext } from '../base-context';
export class Context extends BaseContext{
  constructor() {
    super()
  }
  getID(){
    return process.env.PRODUCTID||'sauceLab';
  }
}
