import { Component } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';
import { SupabaseService } from '../../services/supabase.service';

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

  constructor(private flowbiteService: FlowbiteService, private supabase:SupabaseService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.user = await this.supabase.getCurrentUser();
    } catch (error) {
      console.error('Error al obtener usuario:', error);
    }
  }

  async logout() {
    try {
      await this.supabase.signOut();
      this.user = null;
      window.location.href = '/login';
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}
