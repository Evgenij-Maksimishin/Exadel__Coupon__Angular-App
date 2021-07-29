import {Component} from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  template: `<div class="not-found"><p>404 Not Found</p></div>`,
  styles: [
    `
      .not-found {
        height: 50vh;
        display: flex;
        flex-direction: column;
      }
      .not-found p {
        justify-self: center;
        margin: auto 0;
        font-size: 3rem;
        font-weight: 600;
        text-align: center;
      }
    `,
  ],
})
export class NotFoundPageComponent {}
