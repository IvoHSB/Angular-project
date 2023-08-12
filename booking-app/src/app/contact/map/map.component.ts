import { Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // @ViewChild('mapContainer') mapContainer: ElementRef;

  constructor(private renderer: Renderer2, private ngZone: NgZone) {}

  ngOnInit(): void {
    // this.ngZone.runOutsideAngular(() => {
    //   const map = new google.maps.Map(this.mapContainer.nativeElement, {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8
    //   });

      // Add more map-related code and interactions here
    // });
  }
}
