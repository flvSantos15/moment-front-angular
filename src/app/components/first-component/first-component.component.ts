import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Flavio';
  age: number = 27;
  job: string = 'Developer';
  hobbies: string[] = ['Jogar Uno', 'Assitir filmes'];

  constructor() {}

  ngOnInit(): void {}
}
