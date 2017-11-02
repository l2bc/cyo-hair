import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraditionalStoryComponent } from "./traditional-story.component";
import { TraditionalStoryService } from "../shared/services/traditional-story.service";
import {TraditionalStoryDisplayComponent} from "../traditional-story-display/traditional-story-display.component";
import {traditionalStoryRouting} from "../traditional-story-display/traditional-story.routing";

@NgModule({
  imports: [
    CommonModule,
    traditionalStoryRouting
  ],
  declarations: [
      TraditionalStoryComponent,
      TraditionalStoryDisplayComponent
  ],
  providers: [
      TraditionalStoryService
  ]
})
export class TraditionalStoryModule {}
