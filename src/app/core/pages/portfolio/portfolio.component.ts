import { Component } from '@angular/core';
import { FlipIcon, NorvaSingleIcon, SpleetIcon } from '../models/norva.constant';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  flipIcon = FlipIcon;
  norvaSingleIcon = NorvaSingleIcon;
  spleetIcon = SpleetIcon
}
