// Depdencies
import axios from 'axios';

const Login = class {
  constructor() {
    this.el = document.querySelector('#app');
    this.title = document.querySelector('#title');
  }

  onHandleClick() {
    const instance = axios.create({
      baseURL: 'https://etmuqkbuwh.execute-api.eu-west-3.amazonaws.com/api-deploy',
      headers: {
        'x-api-key': 'mMbMCpdpaV5gU6pKGPS848jkUrWzt0hU31IqTZiV'
      }
    });

    document.addEventListener('DOMContentLoaded', () => {
      instance.get(`/student?id=${this.id}`)
        .then((response) => {
          console.log(response);
        });
    });
  }

  render() {
    this.title.innerHTML = '<h1>Login</h1>';

    this.label = ['password', 'email'];

    this.label.forEach((element) => {
      this.pBox = document.createElement('p');
      this.label = document.createElement('label');
      this.input = document.createElement('input');

      this.label.textContent = element;
      this.label.setAttribute('for', `input-${element}`);
      this.input.setAttribute('id', `input-${element}`);

      this.pBox.appendChild(this.label);
      this.pBox.appendChild(this.input);
      this.el.prepend(this.pBox);
    });

    this.loginBtn = document.createElement('button');
    this.loginBtn.textContent = 'Se connecter';
    this.loginBtn.setAttribute('id', 'loginBtn');
    this.el.appendChild(this.loginBtn);
  }

  run() {
    this.render();
    this.onHandleClick();
  }
};

export default Login;
