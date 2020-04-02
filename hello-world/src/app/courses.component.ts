import { Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'app-courses',
    template: `
        <!--<input (keyup.enter)="onKeyUp($event)">-->
            <input #email (keyup.enter)="onKeyUp(email.value)">
        `
})
export class CoursesComponent {
        // onKeyUp($event) {
        //     console.log($event.target.value);
        // }

            onKeyUp(email) {
                console.log(email);
            }
}

