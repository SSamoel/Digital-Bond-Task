import { Component } from '@angular/core';
import { ClientData } from '../../core/models/client-data';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {

  clientDta: ClientData[] = [
    {
      name: "Mohamed Ali",
      role: "Marketing Manger",
      feedback: " Wonderful agency to work with. Always working towards the delivery of projects. Very technical and knowledgeable in the Marketing. ",
      image: "avatar.webp"
    },
    {
      name: "Mohamed Ali",
      role: "Marketing Manger",
      feedback: " Wonderful agency to work with. Always working towards the delivery of projects. Very technical and knowledgeable in the Marketing. ",
      image: "avatar.webp"
    },
    {
      name: "Mohamed Ali",
      role: "Marketing Manger",
      feedback: " Wonderful agency to work with. Always working towards the delivery of projects. Very technical and knowledgeable in the Marketing. ",
      image: "avatar.webp"
    },
    {
      name: "Mohamed Ali",
      role: "Marketing Manger",
      feedback: " Wonderful agency to work with. Always working towards the delivery of projects. Very technical and knowledgeable in the Marketing. ",
      image: "avatar.webp"
    },
    {
      name: "Mohamed Ali",
      role: "Marketing Manger",
      feedback: " Wonderful agency to work with. Always working towards the delivery of projects. Very technical and knowledgeable in the Marketing. ",
      image: "avatar.webp"
    },
    {
      name: "Mohamed Ali",
      role: "Marketing Manger",
      feedback: " Wonderful agency to work with. Always working towards the delivery of projects. Very technical and knowledgeable in the Marketing. ",
      image: "avatar.webp"
    },
  ]

  scroll(container: HTMLElement, direction: number) {
    const firstCard = container.querySelector('.testimonial-card') as HTMLElement;
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 20; container.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth'
      });
    }
  }
}
