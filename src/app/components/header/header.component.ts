import { Component } from '@angular/core';
import { NorvaWhite } from '../../core/pages/models/norva.constant';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  norvaWhite = NorvaWhite;
}
