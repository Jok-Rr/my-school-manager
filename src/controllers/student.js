// Depdencies
import axios from 'axios';

const Student = class {
  constructor() {
    this.el = document.querySelector('#app');
    this.title = document.querySelector('#title');
    const queryString = window.location.search;
    this.urlParams = new URLSearchParams(queryString);
    this.id = this.urlParams.get('id');
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
          this.label.forEach((element) => {
            this.pBox = document.createElement('p');
            this.label = document.createElement('label');
            this.input = document.createElement('input');

            this.label.textContent = element;
            this.label.setAttribute('for', `input-${element}`);
            this.input.setAttribute('id', `input-${element}`);
            this.input.value = response.data[`${element}`];

            this.pBox.appendChild(this.label);
            this.pBox.appendChild(this.input);
            this.el.prepend(this.pBox);
          });
        });
    });

    this.deleteLink.addEventListener('click', () => {
      instance.delete(`/student?id=${this.id}`)
        .then(() => {
          document.location.href = '/';
        });
    });

    this.updateLink.addEventListener('click', () => {
      this.age = document.getElementById('input-age').value;
      this.email = document.getElementById('input-email').value;
      this.firstname = document.getElementById('input-firstname').value;
      this.lastname = document.getElementById('input-lastname').value;
      this.gender = document.getElementById('input-gender').value;
      this.picture = document.getElementById('input-picture').value;
      this.promo = document.getElementById('input-promo').value;
      this.speciality = document.getElementById('input-speciality').value;

      console.log(this.age);
      console.log(this.email);
      console.log(this.firstname);
      console.log(this.lastname);
      console.log(this.gender);
      console.log(this.picture);
      console.log(this.promo);
      console.log(this.speciality);

      instance.put(`/student?id=${this.id}&age=${this.age}&email=${this.email}&firstname=${this.firstname}&lastname=${this.lastname}&gender=${this.gender}&picture=${this.picture}&promo=${this.promo}&speciality=${this.speciality}`);
      setTimeout(() => {
        document.location.href = `/student?id=${this.id}`;
      }, 1000);
    });
  }

  render() {
    this.label = ['picture', 'lastname', 'firstname', 'age', 'promo', 'speciality', 'gender', 'email'];

    this.title.innerHTML = '<h1>Student</h1>';

    this.deleteLink = document.createElement('button');
    this.deleteLink.textContent = 'Supprimer l\'étudiant';
    this.deleteLink.setAttribute('id', 'deleteStudent');
    this.el.appendChild(this.deleteLink);

    this.updateLink = document.createElement('button');
    this.updateLink.textContent = 'Modifier l\'étudiant';
    this.updateLink.setAttribute('id', 'updateStudent');
    this.el.appendChild(this.updateLink);
  }

  run() {
    this.render();
    this.onHandleClick();
  }
};

export default Student;
