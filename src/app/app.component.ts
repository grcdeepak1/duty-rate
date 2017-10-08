import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `
    <h1>{{title}}</h1>
    <my-dashboard></my-dashboard>
  `,
})
export class AppComponent  {
  title = 'Duty Rate Calculator';
}
