// Controllers
import Home from './controllers/home';
import Student from './controllers/student';
import AllClassroom from './controllers/allClassroom';
import Classroom from './controllers/classroom';
import Login from './controllers/login';
import Register from './controllers/register';
import Logout from './controllers/logout';

const Routes = class {
  constructor() {
    this.routes = [{
      url: '/',
      controller: new Home()
    },
    {
      url: '/student',
      controller: new Student()
    },
    {
      url: '/classroom',
      controller: new Classroom()
    },
    {
      url: '/classrooms',
      controller: new AllClassroom()
    },
    {
      url: '/login',
      controller: new Login()
    },
    {
      url: '/register',
      controller: new Register()
    },
    {
      url: '/logout',
      controller: new Logout()
    }];
    this.auth = JSON.parse(localStorage.getItem('dataLog'));
  }

  routesInit() {
    this.routes.forEach((route) => {
      const { url, controller } = route;
      const pathName = location.pathname;
      if (pathName === url) {
        controller.run();
      }
    });
  }

  render() {
    if (this.auth === null) {
      const logged = document.getElementsByClassName('logged');
      for (let i = 0; i < logged.length; i += 1) {
        logged[i].style.display = 'none';
      }
    }
  }

  run() {
    this.render();
    this.routesInit();
  }
};

const routes = new Routes();

routes.run();
