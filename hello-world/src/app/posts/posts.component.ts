import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.posts = response as any[];
    });
  }

  createPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post).subscribe(newPost => {
      // post.id = newPost.id;
    }, (error: AppError) => {
      this.posts.splice(0, 1);

      if (error instanceof BadInput) {
       // this.form.setErrors(error.originalError);
      } else {
       throw error;
      }
    });
  }

  updatePost(post) {
    this.service.update(post).subscribe(response => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.service.delete(post);
  }
}
