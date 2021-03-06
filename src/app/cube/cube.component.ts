import { Component, OnInit } from '@angular/core';

import * as THREE from 'three/build/three.module.js';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.less']
})
export class CubeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var camera, scene, renderer;
    var mesh;

    init();
    animate();

    function init() {

      camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
      camera.position.z = 700;

      scene = new THREE.Scene();

      var texture = new THREE.TextureLoader().load( 'assets/images/crate.gif' );

      var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
      var material = new THREE.MeshBasicMaterial( { map: texture } );

      mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );

      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.getElementById('cube').appendChild( renderer.domElement );

      //

      window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    function animate() {
      requestAnimationFrame( animate );
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.01;
      renderer.render( scene, camera );
    }
  }
}
