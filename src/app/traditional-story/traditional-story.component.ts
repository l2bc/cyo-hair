import { Component, OnInit } from '@angular/core';

export class TraditionalStory {
  title: string;
  authorName: string;
  body: string;
}

const stories: TraditionalStory[] = [
    {
        title: 'The Soccer cut',
        authorName: 'Love to Be Clipped',
        body: 'The text of the story'
    },
    {
        title: 'After Break',
        authorName: 'Love to Be Clipped',
        body: 'The text of the story, after break'
    },
    {
        title: 'The Bet',
        authorName: 'Love to Be Clipped',
        body: 'The bet haircut'
    },
    {
        title: 'A night out',
        authorName: 'Love to Be Clipped',
        body: 'Another story, the night out'
    },
];

@Component({
  selector: 'app-traditional-story',
  templateUrl: './traditional-story.component.html',
  styleUrls: ['./traditional-story.component.css']
})

export class TraditionalStoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stories = stories;


}
