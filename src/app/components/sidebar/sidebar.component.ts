import { Component } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  user: { name: string; email: string; avatar: string } | null = null;
  data = {
    MenuItems: [
      { title: 'Dashboard', link: '/dashboard/', svg: 'dashboard.svg' },
      { title: 'Gestion de Menu', link: '/dashboard/menu', svg: 'menu.svg' },
      { title: 'Inventario', link: '/dashboard/inventory', svg: 'products.svg' },
      { title: 'Configuracion', link: '/dashboard/settings', svg: 'configuracion.svg' },
      { title: 'Salir', link: '/exit', svg: 'salir.svg' },
    ],
    title: 'TERTULIA',
  };

  constructor(private flowbiteService: FlowbiteService,) {}

  async ngOnInit(): Promise<void> {
    try{
      console.log("User")
    }catch {
      console.log("pruebas")
    }
  }

  async logout() {
  }
}
