import { Component } from '@angular/core';
import { OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'grid-list';
  products = [
    {
      "productId": "1",
      "imagePath": "https://picsum.photos/300",
      "rating": "4.9",
      "percentage": "99",
      "tags": "1.2K",
      "title": "Xiamoi Wifi Extender",
      "price": 12.0,
      "ePacket": true,
      "createdAt": "October 6, 2020 at 9:17:15 AM UTC-4"
    },
    {
      "productId": "2",
      "imagePath": "https://picsum.photos/300",
      "rating": "4.9",
      "percentage": "99",
      "tags": "1.2K",
      "title": "Xiamoi Wifi Extender",
      "price": 12.0,
      "ePacket": true,
      "createdAt": "October 6, 2020 at 9:17:15 AM UTC-4"
    },
    {
      "productId": "3",
      "imagePath": "https://picsum.photos/300",
      "rating": "4.9",
      "percentage": "99",
      "tags": "1.2K",
      "title": "Xiamoi Wifi Extender",
      "price": 12.0,
      "ePacket": true,
      "createdAt": "October 6, 2020 at 9:17:15 AM UTC-4"
    },
    {
      "productId": "4",
      "imagePath": "https://picsum.photos/300",
      "rating": "4.9",
      "percentage": "99",
      "tags": "1.2K",
      "title": "Xiamoi Wifi Extender",
      "price": 12.0,
      "ePacket": true,
      "createdAt": "October 6, 2020 at 9:17:15 AM UTC-4"
    },
    {
      "productId": "5",
      "imagePath": "https://picsum.photos/300",
      "rating": "4.9",
      "percentage": "99",
      "tags": "1.2K",
      "title": "Xiamoi Wifi Extender",
      "price": 12.0,
      "ePacket": true,
      "createdAt": "October 6, 2020 at 9:17:15 AM UTC-4"
    },
    {
      "productId": "6",
      "imagePath": "https://picsum.photos/300",
      "rating": "4.9",
      "percentage": "99",
      "tags": "1.2K",
      "title": "Xiamoi Wifi Extender",
      "price": 12.0,
      "ePacket": true,
      "createdAt": "October 6, 2020 at 9:17:15 AM UTC-4"
    },
    {
      "productId": "7",
      "imagePath": "https://picsum.photos/300",
      "rating": "4.9",
      "percentage": "99",
      "tags": "1.2K",
      "title": "Xiamoi Wifi Extender",
      "price": 12.0,
      "ePacket": true,
      "createdAt": "October 6, 2020 at 9:17:15 AM UTC-4"
    }
  ];

  ngOnInit() {
    // this.getProduts();
  }

  // getProduts() {
  //   fetch('http://localhost:4200/api/Products').then(res => res.json().then(response => {
  //     this.products = response;
  //   }).catch(error => {
  //     console.log(error)
  //   })).catch(error => {
  //     console.log(error);
  //   });
  // }
}
