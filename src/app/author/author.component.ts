import { Component, OnInit } from '@angular/core';

export class Author {
  name: string;
  email: string;
}
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
