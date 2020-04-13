import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(catchError((error: Response) => {
      if (error.status === 400) {
        return throwError(new BadInput(error.json()));
      } else {
        return throwError(new AppError(error.json()));
      }
    }));
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true}));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id).pipe(catchError((error: Response) => {
      if (error.status === 404) {
        return throwError(new NotFoundError());
      } else {
        return throwError(new AppError(error));
      }
    }));
  }
}
