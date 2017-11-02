import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CyoaStoryComponent } from './cyoa-story/cyoa-story.component';
import { SubmitStoryComponent } from './submit-story/submit-story.component';
import { FindStoryComponent } from './find-story/find-story.component';
import { HomeComponent } from './home/home.component';
import { appRouting } from "./app.routing";
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorComponent } from './author/author.component';
import {TraditionalStoryModule} from "./traditional-story/traditional-story.module";

@NgModule({
  declarations: [
    AppComponent,
    CyoaStoryComponent,
    SubmitStoryComponent,
    FindStoryComponent,
    HomeComponent,
    NotFoundComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    TraditionalStoryModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
