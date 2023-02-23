import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Augusto';

  userData = {
    email: 'test@test.com',
    role: 'Administrator',
  };

  userHobbies = ['Assistir filmes', 'Jogar Uno', 'Tocar piano'];

  title = 'curso-angular';
}
