import {trigger, animate, animation, transition, style, query, state, keyframes} from '@angular/animations';

export const animations =

  [
    trigger('stateAnimation', [
      state('incomplete', style({
        'color': '{{color}}',
        'text-decoration': 'none',
        'font-size': '20px'
      }), {params: {color: 'black'}}),
      state('complete', style({
        'color': '#d9d9d9',
        'text-decoration': 'line-through'
      })),
      transition('incomplete => complete', [
        style({'text-decoration': 'line-through'}),
        animate('1s')
      ]),
      transition('complete => incomplete', [
        style({'text-decoration': 'none'}),
        animate('1s')
      ])
    ]),


    trigger('todoAnimation', [
      transition(':enter', [
        query(':self', [
          style({height: 0}),
          animate('0.3s ease-in', style({height: '*'}))
        ])
      ]),
      transition(':leave', [
        query(':self', [
          animate('1s ease-out', style({transform: 'translateX(100%)'}))
        ])
      ]),
    ]),

    trigger('flyInOut', [

      state('complete', style({
        left: '{{left_indent}}', // use interpolation
      }), {params: {left_indent: 0}}), // default parameters values required

      transition('* => complete', [
        animate(2000, keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-300px)', offset: 0.5 }),
        ]))
      ]),
    ])





  ]
;
