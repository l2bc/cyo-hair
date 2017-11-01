import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TraditionalStory } from "../shared/models/traditional-story";
import { TraditionalStoryService } from "../shared/services/traditional-story.service";

@Component({
  selector: 'app-traditional-story-display',
  templateUrl: './traditional-story-display.component.html',
  styleUrls: ['./traditional-story-display.component.css']
})
export class TraditionalStoryDisplayComponent implements OnInit {
  story: TraditionalStory;

  constructor(
      private route: ActivatedRoute,
      private service: TraditionalStoryService,
      private router: Router
      ) {}

  ngOnInit() {
    let storyTitle = this.route.snapshot.params['title'];
    this.service.getStory(storyTitle).then(story => this.story = story);
  }

  goBack() {
    this.router.navigate(['/stories']);
  }


}
