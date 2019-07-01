import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {

  // http://localhost:4200/video?mediaId=dynamic-lighting.wmv
  API_ENDPOINT = 'https://www.cbc.ca/bistro/order';

  constructor(private http: HttpClient) {}

  getVideo(mediaID: string) {
    // return this.http.get(`${this.API_ENDPOINT}?mediaId=${mediaID}`);
    // ../video/dynamic-lighting.wmv
    // return this.http.get(`http://localhost:4200/video?mediaId=dynamic-lighting.wmv`);
    // return this.http.get(`http://localhost:4200/video/dynamic-lighting.wmv`);
    return this.http.get(`https://youtu.be/yLp-MbFujro`);
  }
}
