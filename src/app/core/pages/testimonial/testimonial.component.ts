import { Component } from '@angular/core';
import { Ater, Ava, Donye, Micah } from '../models/norva.constant';

@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
    ater = Ater;
    ava =Ava;
    donye =Donye;
    micah = Micah;
}
