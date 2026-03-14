import { Component } from '@angular/core';
import { ServiceCard } from "../../shared/service-card/service-card";
import { ServiceItem } from '../../core/models/service-item';

@Component({
  selector: 'app-services-list',
  imports: [ServiceCard],
  templateUrl: './services-list.html',
  styleUrl: './services-list.css',
})
export class ServicesList {

  services: ServiceItem[] = [
    {
      title: 'SEO Optimization',
      description: 'Rank higher on Google and drive organic traffic.',
      icon: 'bi bi-search'
    },
    {
      title: 'Web Development',
      description: 'Modern, fast, and responsive web applications.',
      icon: 'bi bi-code-slash'
    },
    {
      title: 'Social Media',
      description: 'Build a strong community and engage your audience through creative and strategic content management.',
      icon: 'bi bi-chat-heart'
    },
    {
      title: 'Mobile Apps',
      description: 'Create mobile apps for ios and andriod',
      icon: 'bi bi-phone'
    },
    {
      title: 'Influencers Marketing',
      description: 'Connect your brand with the right voices to expand your reach and build authentic trust with your audience.',
      icon: 'bi bi-megaphone'
    },
    {
      title: 'SMS Campaigns',
      description: 'Reach your customers directly with personalized and high-converting mobile messaging strategies.',
      icon: 'bi bi-chat-left-dots'
    },
    {
      title: 'Media Production',
      description: 'High-quality visual storytelling, from professional photography to cinematic video production.',
      icon: 'bi bi-camera-reels'
    },
    {
      title: 'Strategic Branding',
      description: 'Creating a unique visual identity and brand voice that resonates with your audience and stands out in the market.',
      icon: 'bi bi-vector-pen'
    }

  ]
}
