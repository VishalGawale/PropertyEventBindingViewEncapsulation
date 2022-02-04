import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>(); 
  interval:any;
  lastNumber= 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartgame(){
      this.interval= setInterval(() => {
        this.intervalFired.emit(this.lastNumber + 1);
        this.lastNumber++;
      },1000);
  }

  onStopgame(){
      clearInterval(this.interval); 
  }
}
