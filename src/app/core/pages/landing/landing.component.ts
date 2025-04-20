import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ServiceComponent } from "../service/service.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { FaqsComponent } from "../faqs/faqs.component";

@Component({
  selector: 'app-landing',
  imports: [HomeComponent, ServiceComponent, PortfolioComponent, TestimonialComponent, FaqsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  schemas:[]
})
export class LandingComponent {

}
