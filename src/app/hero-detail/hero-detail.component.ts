import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf, UpperCasePipe, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';
import { ExponentialStrengthPipe } from '../pipes/exponentialStrengthPipe';


@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, NgIf, UpperCasePipe, DatePipe, ExponentialStrengthPipe]
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
  @Output() done = new EventEmitter<string>();

  birthday = new Date(1988, 3, 15); // April 15, 1988
  power = 6;
  factor = '2';

  constructor() { }

  ngOnInit() {
  }

  whenDone() {
    this.done.emit(this.hero?.name);
  }

}

