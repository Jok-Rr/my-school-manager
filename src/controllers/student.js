// Depdencies
import axios from 'axios';

const Student = class {
  constructor() {
    this.el = document.querySelector('#app');
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
        //   document.body.innerHTML = JSON.stringify(response.data);
          console.log(response.data);
        });
    });

    this.deleteLink.addEventListener('click', () => {
      instance.delete(`/student?id=${this.id}`)
        .then(() => {
        //   document.body.innerHTML = JSON.stringify(response.data);
          document.location.href = '/';
        });
    });

    this.updateLink.addEventListener('click', () => {
      instance.post(`/student?id=${this.id}`, {
        id: '3',
        age: 99
      });
    });
  }

  render() {
    this.el.innerHTML = '<h1>Student</h1>';
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
