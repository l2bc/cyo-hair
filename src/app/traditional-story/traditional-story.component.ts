import { Component, OnInit } from '@angular/core';
import { TraditionalStory} from "../shared/models/traditional-story";
import {TraditionalStoryService} from "../shared/services/traditional-story.service";

@Component({
  selector: 'app-traditional-story',
  templateUrl: './traditional-story.component.html',
  styleUrls: ['./traditional-story.component.css']
})

export class TraditionalStoryComponent implements OnInit {
    stories: TraditionalStory[];
    constructor(private service: TraditionalStoryService) {}

  ngOnInit() {
      this.service.getStories().then(stories => this.stories = stories);
  }


}
