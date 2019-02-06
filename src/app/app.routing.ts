import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);