import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation =

  trigger('routeAnimation', [

    transition( '* => *', [

      query(':enter',
        [
          style({ opacity: 0 })
        ],
        { optional: true }
      ),

      query(':leave',
        [
          style({ opacity: 1 }),
          animate('2.5s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),

      query(':enter',
        [
          style({ opacity: 0 }),
          animate('2.5s', style({ opacity: 1 }))
        ],
        { optional: true }
      )

    ])

  ]);
