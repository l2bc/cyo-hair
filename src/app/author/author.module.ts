import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorService} from "../shared/services/author.service";
import {AuthorComponent} from "./author.component";
import {AuthorDisplayComponent} from "../author-display/author-display.component";
import { TraditionalStoryService } from "../shared/services/traditional-story.service";
import {AuthorRouting} from "./author.routing";


@NgModule({
  imports: [
      CommonModule,
      AuthorRouting
  ],
  declarations: [
      AuthorComponent,
      AuthorDisplayComponent,
  ],
  providers: [
      AuthorService,
      TraditionalStoryService
  ]
})
export class AuthorModule { }