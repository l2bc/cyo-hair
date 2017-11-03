import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CyoaStoryComponent } from './cyoa-story/cyoa-story.component';
import { SubmitStoryComponent } from './submit-story/submit-story.component';
import { FindStoryComponent } from './find-story/find-story.component';
import { HomeComponent } from './home/home.component';
import { appRouting } from "./app.routing";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CyoaStoryComponent,
    SubmitStoryComponent,
    FindStoryComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
