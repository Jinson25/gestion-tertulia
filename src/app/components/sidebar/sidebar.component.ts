import { Component } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  user = {
    name: 'Jinson Alejandro Medina Freire',
    email: '',
    avatar: 'https://avatars.githubusercontent.com/u/97122709?v=4',
  };
  data = {
    MenuItems: [
      { title: 'Dashboard', link: '/dashboard/', svg: 'dashboard.svg' },
      { title: 'Gestion de Menu', link: '/dashboard/menu', svg: 'menu.svg' },
      { title: 'Inventario', link: '/dashboard/profile', svg: 'products.svg' },
      { title: 'Configuracion', link: '/dashboard/settings', svg: 'configuracion.svg' },
      { title: 'Salir', link: '/exit', svg: 'salir.svg' },
    ],
    title: 'TERTULIA',
  };

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      this.flowbiteService.loadFlowbite((flowbite) => {
        // Your custom code here
        console.log('Flowbite loaded', flowbite);
      });
    }
  }
}
