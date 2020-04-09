import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { CardComponent } from './card/card.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
   declarations: [
      AppComponent,
      CourseComponent,
      CoursesComponent,
      AuthorsComponent,
      SummaryPipe,
      FavoriteComponent,
      TitleCasePipe,
      CardComponent,
      LikeComponent,
      InputFormatDirective,
      ZippyComponent,
      ContactFormComponent,
      CourseFormComponent,
      SignupFormComponent,
      NewCourseFormComponent,
      ChangePasswordComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
      CoursesService,
      AuthorsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
