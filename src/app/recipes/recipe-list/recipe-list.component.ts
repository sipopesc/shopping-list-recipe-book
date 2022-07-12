import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://c.pxhere.com/images/96/b5/d1b8c27cb1075e65fd8a40bc4666-1602885.jpg!d'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
