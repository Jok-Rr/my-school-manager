// Depdencies
const Logout = class {
  constructor() {
    this.el = document.querySelector('#app');
    this.title = document.querySelector('#title');
  }

  onHandleClick() {
    localStorage.clear();
    document.location.href = '/login';
  }

  run() {
    this.onHandleClick();
  }
};

export default Logout;
