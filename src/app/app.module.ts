import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TraditionalStoryComponent } from './traditional-story/traditional-story.component';
import { CyoaStoryComponent } from './cyoa-story/cyoa-story.component';
import { SubmitStoryComponent } from './submit-story/submit-story.component';
import { FindStoryComponent } from './find-story/find-story.component';
import { HomeComponent } from './home/home.component';
import { appRouting } from "./app.routing";
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorComponent } from './author/author.component';
import { TraditionalStoryDisplayComponent } from './traditional-story-display/traditional-story-display.component';
import { TraditionalStoryService} from "./shared/services/traditional-story.service";

@NgModule({
  declarations: [
    AppComponent,
    TraditionalStoryComponent,
    CyoaStoryComponent,
    SubmitStoryComponent,
    FindStoryComponent,
    HomeComponent,
    NotFoundComponent,
    AuthorComponent,
    TraditionalStoryDisplayComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [
      TraditionalStoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
