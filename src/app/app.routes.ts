import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatsComponent } from './pages/dashboard/stats/stats.component';
import { MenuComponent } from './pages/dashboard/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { InventoryComponent } from './pages/dashboard/inventory/inventory.component';
import { SettingsComponent } from './pages/dashboard/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';

const titleGlobal = 'Tertulia |';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: `${titleGlobal} Login`,
    pathMatch: 'full',
  },
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
        path: 'inventory',
        component: InventoryComponent,
        pathMatch: 'full',
        title: `${titleGlobal} Inventario`,
      },
      {
        path: 'settings',
        component: SettingsComponent,
        pathMatch: 'full',
        title: `${titleGlobal} Configuración`,
      }
    ],
  },
];
