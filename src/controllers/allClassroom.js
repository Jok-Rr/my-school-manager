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
      instance.get('/classrooms')
        .then((response) => {
          console.log(response.data);
          response.data.Items.forEach((element, i) => {
            this.tr = document.createElement('tr');
            this.a = document.createElement('a');
            this.a.textContent = 'Voir la classe';
            this.a.setAttribute('href', `/classroom?promo=${element.promo}`);

            this.row = this.resultBox.insertRow(0);

            this.cellId = this.row.insertCell(0);
            this.cellNom = this.row.insertCell(1);
            this.cellAction = this.row.insertCell(2);

            this.cellId.innerHTML = i + 1;
            this.cellNom.innerHTML = `La classe des ${element.promo}`;
            this.cellAction.appendChild(this.a);
          });
        });
    });
  }

  render() {
    this.el.innerHTML = '<h1>Toutes les classes</h1>';

    this.headTitle = ['#', 'Nom', 'Action'];

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
    this.render();
    this.onHandleClick();
  }
};

export default Student;
