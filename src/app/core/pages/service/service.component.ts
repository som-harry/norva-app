import { Component } from '@angular/core';
import { VerticalLine } from '../models/norva.constant';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  verticalLine = VerticalLine;
}
