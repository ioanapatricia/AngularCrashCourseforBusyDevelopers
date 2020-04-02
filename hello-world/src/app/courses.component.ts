import { Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'app-courses',
    template: `
            <!--<input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()">-->
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp()">
        `
})
export class CoursesComponent {
    email = 'me@example.com';

    onKeyUp() {
         console.log(this.email);
    }
}

