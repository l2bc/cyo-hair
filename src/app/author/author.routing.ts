import { Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AuthorComponent} from "./author.component";
import {AuthorDisplayComponent} from "../author-display/author-display.component";

const authorRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: AuthorComponent
            },
            {
                path: ':name',
                component: AuthorDisplayComponent
            }
        ]
    }
];

export const AuthorRouting: ModuleWithProviders = RouterModule.forChild(authorRoutes);