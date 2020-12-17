import { Component } from '@angular/core';
import { OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'grid-list';
  products = [];

  ngOnInit() {
    this.getProduts();
  }

  getProduts() {
    fetch('http://localhost:4200/api/Products').then(res => res.json().then(response => {
      this.products = response;
    }).catch(error => {
      console.log(error)
    })).catch(error => {
      console.log(error);
    });
  }
}
