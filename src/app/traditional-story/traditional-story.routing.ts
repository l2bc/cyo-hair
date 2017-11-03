import { Routes, RouterModule} from "@angular/router";
import { TraditionalStoryComponent } from "./traditional-story.component";
import { TraditionalStoryDisplayComponent } from "../traditional-story-display/traditional-story-display.component";
import {ModuleWithProviders} from "@angular/core";

const traditionalStoryRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: TraditionalStoryComponent
            },
            {
                path: ':title',
                component: TraditionalStoryDisplayComponent
            }
        ]
    }
];

export const traditionalStoryRouting: ModuleWithProviders = RouterModule.forChild(traditionalStoryRoutes);