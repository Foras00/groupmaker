import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 openDC(){
    window.open("https://discord.gg/dnq9jmBh");
  }
  openGit(){
    window.open("https://github.com/Foras00");
  }
}
