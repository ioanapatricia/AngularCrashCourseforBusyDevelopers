import { Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'app-courses',
    template: `
        <input (keyup.enter)="onKeyUp()">
        `
})
export class CoursesComponent {
    // onKeyUp($event) {
        // traditional way
        // if ($event.keyCode === 13) {
        //     console.log('Enter was pressed');
        // }
    // }

        onKeyUp() {
            console.log('Enter was pressed');
        }
}

