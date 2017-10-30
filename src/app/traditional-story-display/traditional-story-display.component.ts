import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-traditional-story-display',
  templateUrl: './traditional-story-display.component.html',
  styleUrls: ['./traditional-story-display.component.css']
})
export class TraditionalStoryDisplayComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // grab the story title
    let storyTitle = this.route.snapshot.params['title'];
    console.log('Story title = ' + storyTitle);
  }



}
