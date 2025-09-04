import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  it = [1,34,3,534,53,636,356,363,563563,635635,6356,356,5363,53,635,653,6];
  constructor() { }

  ngOnInit(): void {
  }

}
