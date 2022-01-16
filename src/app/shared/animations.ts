import { animate, style, transition, trigger } from "@angular/animations";

export const FadeIn = trigger('fadeIn', [ 
    transition('void => *', [
      style({ opacity: 0 }), 
      animate(200, style({opacity: 1}))
    ]) 
  ])