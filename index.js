class Page {
  constructor(initObj) {
    this.pubsub = [];
    this.data = initObj.data;
    for (const key in initObj) {
      this[key] = initObj[key];
    }
    this.init(initObj);
  }

  init(initObj) {
    const dataEl = document.querySelectorAll('[data-bind]');
    const handleEl = document.querySelectorAll('[data-handle]');
    for (let index = 0; index < dataEl.length; index++) {
      const element = dataEl[index];
      this.pubsub.push({
        view: element,
        data: element.getAttribute('data-bind'),
      });
    }
    for (let index = 0; index < handleEl.length; index++) {
      const element = handleEl[index];
      element.addEventListener('click', initObj[element.getAttribute('data-handle')].bind(this), true);
    }
  }

  setData(obj) {
    for (const key in obj) {
      this.data[key] = obj[key];
      const currentIndex = this.pubsub.find(val => val.data === key);
      if (currentIndex) currentIndex.view.innerHTML = this.data[key];
    }
  }
}

