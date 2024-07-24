import { Injectable } from '@angular/core';
declare var annyang: any;

@Injectable({
  providedIn: 'root'
})
export class SpeechService {
recognition: any;
  constructor() {
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
   }
   
  start() {
    annyang.start();
    this.recognition.start();
  }

  stop() {
    annyang.abort();
    this.recognition.stop();
  }
}
