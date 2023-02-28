import { Component } from '@angular/core';

import { Animal } from '../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 2 },
    { name: 'Tom', type: 'Cat', age: 1 },
    { name: 'Frida', type: 'Dog', age: 4 },
    { name: 'Bob', type: 'Horse', age: 3 },
  ];

  animalDetails = '';

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  // animal =
}
