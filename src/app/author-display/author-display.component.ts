import { Component, OnInit } from '@angular/core';
import {Author} from "../shared/models/author";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorService} from "../shared/services/author.service";

@Component({
  selector: 'app-author-display',
  templateUrl: './author-display.component.html',
  styleUrls: ['./author-display.component.css']
})
export class AuthorDisplayComponent implements OnInit {
  authorObj: Author;

  constructor(
      private route: ActivatedRoute,
      private service: AuthorService,
      private router: Router
  ) {}

  ngOnInit() {
    let authorName = this.route.snapshot.params['name'];
    this.service.getAuthor(authorName).then(author=>this.authorObj = author);
  }

  goBack() {
    this.router.navigate(['/authors']);
  }

}



