import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('menuAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: 'translateY(-20px)' }), { optional: true }),
        query(
          ':enter',
          stagger('100ms', [
            animate(
              '500ms',
              keyframes([
                style({ opacity: 0, transform: 'translateY(-20px)', offset: 0 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent {

}
