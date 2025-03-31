import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ServiceComponent } from "../service/service.component";

@Component({
  selector: 'app-landing',
  imports: [HomeComponent, ServiceComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  schemas:[]
})
export class LandingComponent {

}
