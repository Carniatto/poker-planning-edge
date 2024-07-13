import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>My deck of cards!</h1>
    @for(card of [1,2,3,5,8,13,20]; track $index; let c = $count; let i = $index) {
      <div class="card"
           [style.transform]="'rotate('+( (120/c)*i -70) +'deg)'"
           [class.selected]="selected() === card"
           [class.fold]="selected() !== 0"
           (click)="selectCard(card)">
        <div class="top">{{card}}</div>
        <div class="middle">{{card}}</div>
        <div class="bottom">{{card}}</div>
      </div>
    }
    Selected: {{selected()}}
  `,
  styles: `
    .card {
      cursor: pointer;
      display: flex;
      padding: 4px;
      justify-content: space-between;
      position: absolute;
      left: 250px;
      border: 5px solid black;
      border-radius: 15px;
      height: 155px;
      width: 95px;
      color: white;
      font-size: 50px;
      background-color: #7C1E86;
      transform-origin: 10px bottom;
      transition: all 250ms ease-in-out;
    }
    .card:hover{
      background-color: #1134AA;
    }
    .selected {
      z-index: 9;
      background-color: #1134AA;
    }
    .fold {
      transform: rotate(0deg) !important;
    }
    .middle{
      text-align: center;
      align-self: center;
      width: 50px;
    }
    .bottom {
      text-align: right;
      align-self: end;
      font-size: 15px;
      width: 15px;
    }
    .top {
      align-self: start;
      text-align: left;
      font-size: 15px;
      width: 15px;

    }
  `,
})
export class App {
  name = 'Angular';
  selected = signal(0);

  selectCard(card: number) {
    this.selected.update((value) => card - value);
  }
}

bootstrapApplication(App);
