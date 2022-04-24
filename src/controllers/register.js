// Depdencies
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const Register = class {
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

    this.registerBtn.addEventListener('click', () => {
      this.id = uuid();
      this.firstname = document.getElementById('input-firstname').value;
      this.lastname = document.getElementById('input-lastname').value;
      this.email = document.getElementById('input-email').value;
      this.age = document.getElementById('input-age').value;
      this.gender = document.getElementById('input-gender').value;
      this.promo = document.getElementById('input-promo').value;
      this.speciality = document.getElementById('input-speciality').value;
      this.picture = document.getElementById('input-picture').value;
      this.password = document.getElementById('input-password').value;
      this.confirmPassword = document.getElementById('input-confirmPassword').value;

      if (this.password === this.confirmPassword
        && this.password !== '' && this.confirmPassword !== '') {
        instance.post(`/student?id=${this.id}&age=${this.age}&email=${this.email}&firstname=${this.firstname}&lastname=${this.lastname}&gender=${this.gender}&picture=${this.picture}&promo=${this.promo}&speciality=${this.speciality}&password=${this.password}&picture=${this.picture}`)
          .then(() => {
            document.location.href = '/login';
          });
      } else {
        document.location.href = '/register';
      }
    });
  }

  render() {
    this.title.innerHTML = '<h1>Register</h1>';

    this.label = ['confirmPassword', 'password', 'speciality', 'promo', 'gender', 'age', 'email', 'picture', 'lastname', 'firstname'];

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

    this.registerBtn = document.createElement('button');
    this.registerBtn.textContent = 'S\'inscrire';
    this.registerBtn.setAttribute('id', 'registerBtn');
    this.el.appendChild(this.registerBtn);
  }

  run() {
    this.render();
    this.onHandleClick();
  }
};

export default Register;
