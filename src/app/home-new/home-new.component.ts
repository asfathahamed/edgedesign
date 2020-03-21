import { Component, OnInit } from '@angular/core';
// import "three/build/three.min.js";
// import "dot/doT.min.js";
// import "uevent/uevent.min.js";
// import * as PhotoSphereViewer from 'photo-sphere-viewer/dist/photo-sphere-viewer.min.js';

@Component({
  selector: 'app-home',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.less']
})
export class HomeNewComponent implements OnInit {
  private kWidth: number;
  private kHeight: number;
  ngOnInit(): void {
    // var viewer = new PhotoSphereViewer({
    //   container: 'panoViewer',
    //   panorama: 'assets/images/360-test-1.jpg',
    //   size: {
    //     width: this.kWidth,
    //     height: this.kHeight,
    //   }
    // });
  }
}
