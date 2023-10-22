import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('writingAnimation', [
      state('in', style({ opacity: 1, transform: 'scale(1)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('500ms ease-in-out'),
      ]),
    ]),
    trigger('descriptionAnimation', [
      state('void', style({ opacity: 0 })), // Initial state
      transition(':enter, :leave', [
        animate(1000, style({ opacity: 1 })), // Animation duration and final state
      ]),
    ]),
    trigger('animateMenu', [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateY(-50%)" }),
          stagger(150, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" }))
          ])
        ])
      ])
    ])
  ],
})
export class HomeComponent {
  animationState = 'in';
  heading = "Hey, I'm Phyo!";

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
