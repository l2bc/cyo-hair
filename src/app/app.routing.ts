import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TraditionalStoryComponent } from "./traditional-story/traditional-story.component";
import { CyoaStoryComponent } from "./cyoa-story/cyoa-story.component";
import { FindStoryComponent } from "./find-story/find-story.component";
import { SubmitStoryComponent } from "./submit-story/submit-story.component";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorComponent} from "./author/author.component";
import {TraditionalStoryDisplayComponent} from "./traditional-story-display/traditional-story-display.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cyoastories', component: CyoaStoryComponent },
    { path: 'search', component: FindStoryComponent },
    { path: 'submit', component: SubmitStoryComponent },
    { path: 'authors', component: AuthorComponent },
    { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);