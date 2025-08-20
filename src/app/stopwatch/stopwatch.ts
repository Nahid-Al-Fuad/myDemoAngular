import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [CommonModule],
  templateUrl: './stopwatch.html',
  styleUrl: './stopwatch.scss'
})
export class Stopwatch {
elapsedTime = 0;
  isRunning = false;
  intervalRef: any;

  constructor(private cdr:ChangeDetectorRef){}

  startStop() {
    // this.isRunning ? this.stop() : this.start();
    if (this.isRunning) {
      this.stop();
    } else {
      this.start();
    }
  }

  private start() {
    this.isRunning = true;
    this.intervalRef = setInterval(() => {
      this.elapsedTime += 0.1;
      this.cdr.detectChanges();
    }, 100);
    console.log('Stopwatch started.');
  }

  private stop() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    console.log('Stopwatch stopped.');
  }

  reset() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.elapsedTime = 0;
    console.log('Stopwatch reset.');
  }
}
