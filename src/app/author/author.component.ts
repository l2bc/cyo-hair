import { Component, OnInit } from '@angular/core';
import {Author} from "../shared/models/author";
import { AuthorService } from "../shared/services/author.service";
import {TraditionalStory} from "../shared/models/traditional-story";
import {TraditionalStoryService} from "../shared/services/traditional-story.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: Author[];
  traditionalStories: TraditionalStory[];

  constructor(private storyService: TraditionalStoryService, private authorService: AuthorService) { }

  ngOnInit() {
    this.storyService.getStories().then(stories => this.traditionalStories = stories);
    this.authorService.getAuthors().then(authors => this.authors = authors);
    for(let authorIndex in this.authors) {
      let storiesForAuthor = this.traditionalStories.filter(story => story.authorName = this.authors[authorIndex].name);
      for (let storyIndex in storiesForAuthor){
        this.authors[authorIndex].stories.push(storiesForAuthor[storyIndex].title)
      }
    }
  }

}