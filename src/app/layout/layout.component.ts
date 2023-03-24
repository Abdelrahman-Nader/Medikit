import { Component, Input, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Input() icon: string = '';
  @Output() docList: any = [
    {
      nameOne: 'mohamed',
      posittion: 'admin',
    },

  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  isHandsets = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  isOpen() {
    this.isHandsets = !this.isHandsets;
  }
}
