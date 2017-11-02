import { Routes, RouterModule} from "@angular/router";
import { TraditionalStoryComponent } from "../traditional-story/traditional-story.component";
import { TraditionalStoryDisplayComponent } from "./traditional-story-display.component";
import {ModuleWithProviders} from "@angular/core";

const traditionalStoryRoutes: Routes = [
    { path: 'stories', component: TraditionalStoryComponent },
    { path: 'stories/:title', component: TraditionalStoryDisplayComponent }
];

export const traditionalStoryRouting: ModuleWithProviders = RouterModule.forChild(traditionalStoryRoutes);