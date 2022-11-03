import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'groupmaker2';
  currentBreakpoint:string = '';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public breakpointObserver: BreakpointObserver
    ){
      this.matIconRegistry.addSvgIcon(
        `discord`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/discord-svg.svg"),
      )
      this.matIconRegistry.addSvgIcon(
        `github`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/github-svg.svg")
      )
  }
  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        console.log("XSmall")
           this.currentBreakpoint = Breakpoints.XSmall;
      }
      if (state.breakpoints[Breakpoints.Small]) {
        console.log("Small")
        this.currentBreakpoint = Breakpoints.Small;
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        console.log("Medium")
        this.currentBreakpoint = Breakpoints.Medium;
      }
      if (state.breakpoints[Breakpoints.Large]) {
        console.log("Large")
        this.currentBreakpoint = Breakpoints.Large;
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
        console.log("XLarge")
        this.currentBreakpoint = Breakpoints.XLarge;
      }
    });
  }
  

}
