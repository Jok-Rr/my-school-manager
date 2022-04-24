// Depdencies
import axios from 'axios';

const Student = class {
  constructor() {
    this.el = document.querySelector('#app');
    this.title = document.querySelector('#title');
    this.auth = JSON.parse(localStorage.getItem('dataLog'));
  }

  capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  onHandleClick() {
    const instance = axios.create({
      baseURL: 'https://etmuqkbuwh.execute-api.eu-west-3.amazonaws.com/api-deploy',
      headers: {
        'x-api-key': 'mMbMCpdpaV5gU6pKGPS848jkUrWzt0hU31IqTZiV'
      }
    });

    this.btnSubmit.addEventListener('click', () => {
      const searchVal = this.capitalize(this.inputSearch.value);
      instance.get(`/search?search=${searchVal}`)
        .then((response) => {
          this.tbody.innerHTML = '';

          if (response.data.length > 0) {
            response.data.forEach((element) => {
              this.tr = document.createElement('tr');
              this.a = document.createElement('a');
              this.figure = document.createElement('figure');
              this.pic = document.createElement('img');
              this.pic.setAttribute('src', element.picture);
              this.figure.appendChild(this.pic);
              this.a.textContent = 'Voir l\'étudiant';
              this.a.setAttribute('href', `/student?id=${element.id}`);

              this.aClassroom = document.createElement('a');
              this.aClassroom.textContent = 'Voir la classe';
              this.aClassroom.setAttribute('href', `/classroom?promo=${element.promo}`);

              this.row = this.resultBox.insertRow(0);

              this.cellPicture = this.row.insertCell(0);
              this.cellNom = this.row.insertCell(1);
              this.cellPrenom = this.row.insertCell(2);
              this.cellAge = this.row.insertCell(3);
              this.cellGender = this.row.insertCell(4);
              this.cellEmail = this.row.insertCell(5);
              this.cellPromotion = this.row.insertCell(6);
              this.cellSpecialité = this.row.insertCell(7);
              this.cellAction = this.row.insertCell(8);

              this.cellPicture.appendChild(this.figure);
              this.cellNom.innerHTML = element.lastname;
              this.cellPrenom.innerHTML = element.firstname;
              this.cellAge.innerHTML = element.age;
              this.cellGender.innerHTML = element.gender;
              this.cellEmail.innerHTML = element.email;
              this.cellPromotion.innerHTML = element.promo;
              this.cellSpecialité.innerHTML = element.speciality;
              this.cellAction.appendChild(this.a);
              this.cellAction.appendChild(this.aClassroom);
            });
          }
        });
    });
  }

  render() {
    this.title.innerHTML = '<h1>Home</h1>';

    this.headTitle = [' ', 'Nom', 'Prénom', 'Age', 'Genre', 'Email', 'Promotion', 'Spécialité', 'Action'];
    this.label = ['picture', 'lastname', 'firstname', 'age', 'promo', 'speciality', 'gender', 'email'];

    this.searchBox = document.createElement('div');

    this.inputSearch = document.createElement('input');
    this.inputSearch.setAttribute('type', 'text');

    this.btnSubmit = document.createElement('input');
    this.btnSubmit.setAttribute('type', 'submit');
    this.btnSubmit.data = 'Rechercher';

    this.resultBox = document.createElement('table');

    this.tbody = document.createElement('tbody');
    this.thead = document.createElement('thead');

    this.resultBox.setAttribute('id', 'resultSearchBox');

    this.searchBox.appendChild(this.inputSearch);
    this.searchBox.appendChild(this.btnSubmit);
    this.searchBox.appendChild(this.resultBox);

    this.headTitle.forEach((element) => {
      this.th = document.createElement('th');
      this.th.textContent = element;
      this.thead.appendChild(this.th);
    });

    this.resultBox.appendChild(this.tbody);
    this.resultBox.appendChild(this.thead);
    this.el.appendChild(this.searchBox);

    if (this.auth !== null) {
      const p = document.createElement('div');
      p.setAttribute('id', 'profils-account');

      this.label.forEach((element) => {
        this.pBox = document.createElement('p');
        this.label = document.createElement('label');
        this.input = document.createElement('input');

        this.label.textContent = element;
        this.label.setAttribute('for', `input-${element}`);
        this.input.setAttribute('id', `input-${element}`);
        this.input.value = this.auth[`${element}`];

        this.pBox.appendChild(this.label);
        this.pBox.appendChild(this.input);
        this.el.prepend(this.pBox);
      });
    }
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
