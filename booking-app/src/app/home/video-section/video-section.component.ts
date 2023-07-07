import { Component } from '@angular/core';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.css']
})
export class VideoSectionComponent {
  isVisibleVideo = false;

  showVideo(): void {
    console.log('asdgdg')
    this.isVisibleVideo = true;
    let body: any = document.querySelector('body');
    body.style.overflow = 'hidden';
  }

  hideVideo(): void {
    this.isVisibleVideo = false;
    let body: any = document.querySelector('body');
    body.style.overflow = 'auto';
  }
}
