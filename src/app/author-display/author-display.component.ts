import { Component, OnInit } from '@angular/core';
import {Author} from "../shared/models/author";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorService} from "../shared/services/author.service";
import {TraditionalStoryService} from "../shared/services/traditional-story.service";
import {TraditionalStory} from "../shared/models/traditional-story";

@Component({
  selector: 'app-author-display',
  templateUrl: './author-display.component.html',
  styleUrls: ['./author-display.component.css']
})
export class AuthorDisplayComponent implements OnInit {
  authorObj: Author;
  relatedStories: TraditionalStory[];

  constructor(
      private route: ActivatedRoute,
      private authorService: AuthorService,
      private storyService: TraditionalStoryService,
      private router: Router
  ) {}

  ngOnInit() {
    let authorName = this.route.snapshot.params['name'];
    this.authorService.getAuthor(authorName).then(author=>this.authorObj = author);
    this.storyService.getStoryByAuthor(authorName).then(stories =>this.relatedStories = stories);
  }

  goBack() {
    this.router.navigate(['/authors']);
  }

}



