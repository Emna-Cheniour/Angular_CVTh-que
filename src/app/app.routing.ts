import { RouterModule, Routes } from "@angular/router";
import { ColorComponent } from "./color/color.component";
import { AddCvComponent } from "./cvTech/add-cv/add-cv.component";
import { AuthComponent } from "./cvTech/auth/auth.component";
import { CvComponent } from "./cvTech/cv/cv.component";
import { DeleteCvComponent } from "./cvTech/delete-cv/delete-cv.component";
import { DetailComponent } from "./cvTech/detail/detail.component";
import { ErrorComponent } from "./cvTech/error/error.component";

const APP_ROUTING: Routes = [
    { path: '', component: CvComponent },
    {
        path: 'cv',
        children: [
            { path: '', component: CvComponent },
            { path: 'add', component: AddCvComponent },
            { path: ':id', component: DetailComponent },
            { path: 'delete/:id', component: DeleteCvComponent },
            
        ]
    },
    { path: 'color', component: ColorComponent },
    { path: 'login', component: AuthComponent},
    { path: '**', component: ErrorComponent},
    
]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)