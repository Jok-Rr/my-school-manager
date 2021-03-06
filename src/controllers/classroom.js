// Depdencies
import axios from 'axios';

const Student = class {
  constructor() {
    this.el = document.querySelector('#app');
    this.title = document.querySelector('#title');
    const queryString = window.location.search;
    this.urlParams = new URLSearchParams(queryString);
    this.promo = this.urlParams.get('promo');
    this.auth = JSON.parse(localStorage.getItem('dataLog'));
  }

  onHandleClick() {
    const instance = axios.create({
      baseURL: 'https://etmuqkbuwh.execute-api.eu-west-3.amazonaws.com/api-deploy',
      headers: {
        'x-api-key': 'mMbMCpdpaV5gU6pKGPS848jkUrWzt0hU31IqTZiV'
      }
    });

    document.addEventListener('DOMContentLoaded', () => {
      instance.get(`/classrooms/room?promo=${this.promo}`)
        .then((response) => {
          response.data.Items.forEach((element) => {
            this.tr = document.createElement('tr');
            this.a = document.createElement('a');
            this.figure = document.createElement('figure');
            this.pic = document.createElement('img');
            this.pic.setAttribute('src', element.picture);
            this.figure.appendChild(this.pic);

            this.a.textContent = 'Voir l\'√©tudiant';
            this.a.setAttribute('href', `/student?id=${element.id}`);

            this.row = this.resultBox.insertRow(0);
            this.cellPicture = this.row.insertCell(0);
            this.cellNom = this.row.insertCell(1);
            this.cellPrenom = this.row.insertCell(2);
            this.cellAge = this.row.insertCell(3);
            this.cellGender = this.row.insertCell(4);
            this.cellEmail = this.row.insertCell(5);
            this.cellPromotion = this.row.insertCell(6);
            this.cellSpecialit√© = this.row.insertCell(7);
            this.cellAction = this.row.insertCell(8);
            this.cellPicture.appendChild(this.figure);
            this.cellNom.innerHTML = element.lastname;
            this.cellPrenom.innerHTML = element.firstname;
            this.cellAge.innerHTML = element.age;
            this.cellGender.innerHTML = element.gender;
            this.cellEmail.innerHTML = element.email;
            this.cellPromotion.innerHTML = element.promo;
            this.cellSpecialit√©.innerHTML = element.speciality;
            this.cellAction.appendChild(this.a);
          });
        });
    });
  }

  render() {
    this.title.innerHTML = `La classe des " ${this.promo} "`;

    this.headTitle = [' ', 'Nom', 'Pr√©nom', 'Age', 'Genre', 'Email', 'Promotion', 'Sp√©cialit√©', 'Action'];

    this.searchBox = document.createElement('div');

    this.resultBox = document.createElement('table');

    this.tbody = document.createElement('tbody');
    this.thead = document.createElement('thead');

    this.resultBox.setAttribute('id', 'resultSearchBox');

    this.searchBox.appendChild(this.resultBox);

    this.headTitle.forEach((element) => {
      this.th = document.createElement('th');
      this.th.textContent = element;
      this.thead.appendChild(this.th);
    });

    this.resultBox.appendChild(this.tbody);
    this.resultBox.appendChild(this.thead);
    this.el.appendChild(this.searchBox);
  }

  run() {
    if (this.auth !== null) {
      this.render();
      this.onHandleClick();
    } else {
      document.location.href = '/login';
    }
  }
};

export default Student;
