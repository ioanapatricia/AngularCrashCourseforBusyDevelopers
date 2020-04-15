import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';


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
      ChangePasswordComponent,
      PostsComponent,
      GithubFollowersComponent,
      NavbarComponent,
      HomeComponent,
      GithubProfileComponent,
      NotfoundComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forRoot([
         { path: '', component: HomeComponent },
         { path: 'followers/:id', component: GithubProfileComponent },
         { path: 'followers', component: GithubFollowersComponent },
         { path: 'posts', component: PostsComponent },
         { path: '**', component: NotfoundComponent }
      ])
   ],
   providers: [
      CoursesService,
      AuthorsService,
      PostService,
      GithubFollowersService,
      { provide: ErrorHandler, useClass: AppErrorHandler }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
