import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fz-ui',
  template: `
    <mat-form-field class="input-width">
      <mat-label>{{label}}</mat-label>
      <input matInput placeholder="{{placeholder}}" value="{{value}}">
    </mat-form-field>
  `,
  styleUrls: ['input.sass']
})
export class InputComponent {
  inputField: string;
  label = 'Favorite food';
  placeholder = 'Ex. Pizza';
  value = 'Sushi';
 }
