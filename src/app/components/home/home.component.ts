import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

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
  heading = "Hey, I'm Phyo Theingi";
  formGroup: any;
  buttonClick = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.animateTextWriting();
    this.formGroup = this.fb.group({
      name: ['', { validators: Validators.required }],
      email: ['', { validators: Validators.required }],
      subject: ['', { validators: Validators.required }],
      message: ['', { validators: Validators.required }],
    }, { updateOn: 'submit' });
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

  call(media: string) {
    switch (media) {
      case 'facebook':
        window.open("https://www.facebook.com/phyotheingi.phyotheingi.7/", "_blank");
        break;
      case 'pinterest':
        window.open("https://www.pinterest.com/phyotheingi92/", "_blank");
        break;
      case 'youtube':
        window.open("https://www.youtube.com/channel/UCS2n3-G8nlVqaHR0TppQHhw", "_blank");
        break;
      case 'linkedin':
        window.open("https://www.linkedin.com/in/phyo-theingi/", "_blank");
        break;
      default:
        break;
    }
  }

  clickSend() {
    if (this.formGroup.valid) {
      // call api
    } else {
      this.buttonClick = true;
    }
  }

  playAudio() {
    console.log("hola");

    let audio = new Audio();
    audio.src = new URL("assets/images/name.mp3").toString();
    // const track = require("url:../assets/images/name.mp3");
    audio.load();
    audio.play();
  }
}
