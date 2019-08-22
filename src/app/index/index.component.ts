import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }
  hero = 'kush';
  arr = [1,2,3,4,5,6]
  obj = [
    {
      1 : 'one',
    }
    ,{
    2 : 'two'
    }
]
  imageObject: [{
      image: 'assets/images/top.png',
      thumbImage: 'assets/images/top.png',
      alt: 'alt of image',
      title: 'title of image'
  },
  {
      image: 'assets/images/top.png',
      thumbImage: 'assets/images/top.png',
      alt: 'alt of image',
      title: 'title of image'
  },
  ];
  ngOnInit() {
  }

}
