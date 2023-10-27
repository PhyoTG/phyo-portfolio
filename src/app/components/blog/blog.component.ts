import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [
    trigger('writingAnimation', [
      state('in', style({ opacity: 1, transform: 'scale(1)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('500ms ease-in-out'),
      ]),
    ])
  ]
})
export class BlogComponent {
  heading = "A glance to AI, Amazon Rekognition";
  ngOnInit() {
    this.animateTextWriting();
  }
  animateTextWriting() {
    const textArray = this.heading.split('');
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < textArray.length) {
        this.heading = textArray.slice(0, currentIndex + 1).join('');
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval to control the speed of writing
  }
}
