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
    this.matIconRegistry.addSvgIcon('doctor', this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/doctor.svg'));
    this.matIconRegistry.addSvgIcon('lavatory', this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/lavatory.svg'));
    this.matIconRegistry.addSvgIcon('open-folder', this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/open-folder.svg'));
    this.matIconRegistry.addSvgIcon('quarter', this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/quarter.svg'));
    this.matIconRegistry.addSvgIcon('schedule', this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/schedule.svg'));
    this.matIconRegistry.addSvgIcon('scheme', this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/scheme.svg'));
  }
}
