import { Injectable } from '@angular/core';
import { Author} from "../models/author";

const authorsPromise: Promise<Author[]> = Promise.resolve([
      {
          name: "Love to be clipped",
          email: "lovetobeclipped@gmail.com",
          stories: []
      },
      {
          name: "Some other author",
          email: "someOther@gmail.com",
          stories: []
      }
  ]
);

@Injectable()
export class AuthorService {
  // get all authors
  getAuthors(){
    return authorsPromise;
  }
  getAuthor(name) {
    return authorsPromise.then(authors => authors.find(author => author.name.toUpperCase() === name.toUpperCase()));
  }
}
