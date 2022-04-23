// Depdencies
import axios from 'axios';

const Login = class {
  constructor() {
    this.el = document.querySelector('#app');
  }

  onHandleClick() {
    const instance = axios.create({
      baseURL: 'https://etmuqkbuwh.execute-api.eu-west-3.amazonaws.com/api-deploy',
      headers: {
        'x-api-key': 'mMbMCpdpaV5gU6pKGPS848jkUrWzt0hU31IqTZiV'
      }
    });

    this.el.addEventListener('click', () => {
      instance.get('/student?email=tom.bost@gmail.com')
        .then((response) => {
        //   document.body.innerHTML = JSON.stringify(response.data);
          console.log(response.data);
        });
    });
  }

  render() {
    this.el.innerHTML = '<h1>Login</h1>';
  }

  run() {
    this.render();
    this.onHandleClick();
  }
};

export default Login;
