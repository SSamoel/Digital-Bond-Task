import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  imports: [RouterLink],
  templateUrl: './success.html',
  styleUrl: './success.css',
})
export class Success {
  route = inject(Router)

}
