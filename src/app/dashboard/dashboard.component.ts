import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = true;
  constructor() { }

  ngOnInit(): void {
  }

  logOut() {
    console.group("Dashboard Log");
    console.log("Cerro Sesión");
    console.groupEnd();
  }
}
