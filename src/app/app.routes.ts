import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatsComponent } from './pages/dashboard/stats/stats.component';

const titleGlobal = 'Trueques |';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: `${titleGlobal} Dashboard`,
        children: [
            { path: '', component: StatsComponent,
                title: `${titleGlobal} Estadisticas`, pathMatch: 'full' },
        ],
    },
];
