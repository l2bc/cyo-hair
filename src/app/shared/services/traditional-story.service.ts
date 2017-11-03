import { Injectable } from '@angular/core';
import { TraditionalStory} from "../models/traditional-story";

const storiesPromise: Promise<TraditionalStory[]> = Promise.resolve([
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
]);

@Injectable()
export class TraditionalStoryService {

  constructor() { }

  // get all stories, not sure if we need it
  getStories(){
    return storiesPromise;
  }
  // get specific story
  getStoryByTitle(title){
    return storiesPromise.then(stories=> stories.find(story => story.title.toUpperCase() === title.toUpperCase()));
  }

  getStoryByAuthor(author){
      return storiesPromise.then(stories=>stories.filter(story => story.authorName.toUpperCase() === author.toUpperCase()));
  }
}
