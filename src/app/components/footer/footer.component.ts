import { Component } from '@angular/core';
import { FacebookFooterIcon, InstaFooterIcon, NorvaFooterIcon, XFooterIcon, YoutubeFooterIcon } from '../../core/pages/models/norva.constant';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  norvaFooterIcon =NorvaFooterIcon;
  youtubeFooterIcon = YoutubeFooterIcon;
  xFooterIcon = XFooterIcon;
  facebookFooterIcon =FacebookFooterIcon;
  instaFooterIcon = InstaFooterIcon;

}
