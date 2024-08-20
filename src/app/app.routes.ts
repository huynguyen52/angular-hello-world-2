import { Routes } from '@angular/router';
import { MoviesComponent } from './modules/movies/movies.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { MovieDetailComponent } from './modules/movie-detail/movie-detail.component';
import { HomeComponent } from './modules/home/home.component';
import { ClientLayoutComponent } from './components/layout/client-layout/client-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminLayoutComponent } from './components/layout/admin-layout/admin-layout.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { TestsComponent } from './modules/tests/tests.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      layout: ClientLayoutComponent,
    },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
    canActivate: [AuthGuard],
    data: {
      layout: AdminLayoutComponent,
    },
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent,
    canActivate: [AuthGuard],
    data: {
      layout: AdminLayoutComponent,
    },
  },
  {
    path: 'tests',
    component: TestsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
