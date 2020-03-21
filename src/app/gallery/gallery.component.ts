import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  tomorrow = new Date(2017, 9, 20, 14,34);

  constructor() { }

  ngOnInit() {
  }

}
