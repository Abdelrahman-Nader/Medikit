import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'medikit';

  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('baby', this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/baby.svg'));
    this.matIconRegistry.addSvgIcon('baby2', this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/baby2.svg'));
  }
}
