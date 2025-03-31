import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PatternImage, PersonImage } from '../models/norva.constant';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isVisible = false;
  patternImage = PatternImage;
  personImage = PersonImage;

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 300); // Delay animation after page load
  }
}
