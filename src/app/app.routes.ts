import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatsComponent } from './pages/dashboard/stats/stats.component';
import { MenuComponent } from './pages/dashboard/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';

const titleGlobal = 'Tertulia |';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: `${titleGlobal} Dashboard`,
    children: [
      {
        path: '',
        component: StatsComponent,
        title: `${titleGlobal} Estadisticas`,
        pathMatch: 'full',
      },
      {
        path: 'menu',
        component: MenuComponent,
        pathMatch: 'full',
        title: `${titleGlobal} Menu`,
      },
      {
        path: 'auth',
        component: LoginComponent,
        pathMatch: 'full',
        title: `${titleGlobal} Auth`,
      }
    ],
  },
];
