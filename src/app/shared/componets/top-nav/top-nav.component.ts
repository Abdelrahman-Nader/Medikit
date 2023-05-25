import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Input() icon: string = '';

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  isHandsets = false;

  constructor(private breakpointObserver: BreakpointObserver) {}
  @Input() docList: any = [
    {
      nameOne: 'mohamed',
      posittion: 'admin',
    }
  ];

  ngOnInit(): void {}

  isOpen() {
    this.isHandsets = !this.isHandsets;
  }
}
