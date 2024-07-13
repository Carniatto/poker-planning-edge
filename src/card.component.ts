import { Component, input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'cards',
  template: `

  `,
  styles: `

  `
})
export class CardsComponent {
  value  = input.required<number>();
  
}