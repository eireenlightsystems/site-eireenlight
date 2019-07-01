import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {VideoPlayerService} from '../../services/video-player.service';

@Component({
  selector: 'sel-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;

  mediaID = 'yLp-MbFujro';
  video: any = {
    title: '',
    description: '',
    duration: '',
    key: ''
  };

  constructor(private videoPlayerService: VideoPlayerService) {
  }

  ngOnInit() {
    this.getVideo(this.mediaID);
  }

  getVideo(mediaID: string) {
    this.videoPlayerService.getVideo(mediaID).subscribe((video: any) => {
      this.video.title = video.items[0].title; // set title
      this.video.description = video.items[0].description; // set description

      // set duration
      const duration = video.items[0].duration;
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      this.video.duration = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);

      this.video.key = video.items[0].assetDescriptors[1].key; // set key

      setTimeout(() => this.videoPlayer.nativeElement.play(), 0); // play
    });
  }

  getSnapshot() {
    const context = this.canvas.nativeElement.getContext('2d');

    context.drawImage(this.videoPlayer.nativeElement, 0, 0, 160, 120);
  }

}
