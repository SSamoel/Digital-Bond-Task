import { Component, signal } from '@angular/core';
import { Homepage } from "./pages/homepage/homepage";

@Component({
  selector: 'app-root',
  imports: [Homepage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Digital-Bond-Task');
}
