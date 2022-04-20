import { UIInteraction } from "../../ui-interaction";

export abstract class BaseUI extends UIInteraction {

  protected base = {};
  // Elements seen in most UI
  protected frequent_element = {};

  awaitInteractableUI () {
    // TODO:
  }

}
