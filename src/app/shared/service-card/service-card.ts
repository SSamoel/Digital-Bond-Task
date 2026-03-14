import { Component, input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {

  title = input.required<string>();
  description = input<string>();
  icon= input<string>();
}
