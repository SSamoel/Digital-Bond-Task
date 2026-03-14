import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { HeroSection } from '../../components/hero-section/hero-section';
import { ContactForm } from '../../components/contact-form/contact-form';
import { Testimonials } from '../../components/testimonials/testimonials';
import { ServicesList } from '../../components/services-list/services-list';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-homepage',
  imports: [Navbar, HeroSection, ContactForm, Testimonials, ServicesList, Footer ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
