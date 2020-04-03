import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // tslint:disable-next-line: no-inputs-metadata-property
  inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {
 isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}
