export default class Form {

  /**
   * @param selector
   */
  constructor(selector = '.test-form') {
    this.el = document.querySelector(selector);

    this.inputs = {
      name: document.querySelector('input[name=name]'),
    };

    this.init();
  }

  init() {
    if(this.el){
      this.el.addEventListener('keyup', event => {
        this.reset();
      });
    }
  }

  reset() {
    this.inputs.name.focus();
  }

}