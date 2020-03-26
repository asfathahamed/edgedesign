import { Component, OnInit } from '@angular/core';

interface Timeline {
  image: string;
  title: string;
  timestamp: Date;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  tomorrow = new Date(2017, 9, 20, 14,34);
  timelineData: Timeline[] = []

  constructor() { }

  ngOnInit() {
    this.timelineData = [{
      image: 'assets/images/image-2.jpg',
      title: 'Company Started',
      timestamp: new Date()
    }]
  }
 
}
