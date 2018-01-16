document.addEventListener('DOMContentLoaded', () => {
  new Page({
    data: {
      name: 'bob',
    },
    setName: function () {
      this.setData({
        name: randomName()
      });
    }
  });

  function randomName(len = 10) {
    const str = 'qwertyuiopasdfghjklzxcvbnm';
    let nameStr = '';
    const name = function () {
      if (len > 0) {
        nameStr += nameStr.length ? str[Math.floor(Math.random() * str.length)] : str[Math.floor(Math.random() * str.length)].toUpperCase();
        len--;
        return name();
      } else {
        return nameStr;
      }
    }
    return name();
  }
});