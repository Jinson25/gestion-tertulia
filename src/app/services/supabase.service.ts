import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { Router } from '@angular/router';
import { UserMetadata } from '../interfaces/user.interfaces';
import { MenuItem, InventoryItem } from '../shared/interfaces/models.interface';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabaseUrl: string = 'https://nfxtbfjznxgwdljkokvc.supabase.co';
  private supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5meHRiZmp6bnhnd2Rsamtva3ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3NjM3NzEsImV4cCI6MjA1MTMzOTc3MX0.L64wNEKUskpgAB49_SQ0mLT4zpuu4_18YYpZ-r2R8VU';
  private supabase: SupabaseClient | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.supabase = createClient(this.supabaseUrl, this.supabaseKey);

      // Escuchar cambios en el estado de autenticación
      this.supabase.auth.onAuthStateChange((_event, session) => {
        if (session) {
          // Guardar usuario en localStorage
          localStorage.setItem('user', JSON.stringify(session.user));
          // Redirigir al dashboard
          this.router.navigate(['/dashboard']);
        } else {
          // Eliminar datos del usuario si la sesión termina
          localStorage.removeItem('user');
        }
      });
    }
  }

  // Iniciar sesión con Google
  async signInWithGoogle() {
    if (!this.supabase) {
      throw new Error('Cliente Supabase no inicializado');
    }

    return await this.supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
  }

  // Cerrar sesión
  signOut() {
    if (!this.supabase)
      return Promise.reject('Supabase client not initialized');

    return this.supabase.auth.signOut().then(({ error }) => {
      if (error) throw error;
      // Eliminar datos de sesión
      localStorage.removeItem('user');
      // Redirigir al usuario a la página de inicio
      this.router.navigate(['/']);
    });
  }

  // Obtener la sesión actual
  async getSession() {
    if (!this.supabase)
      return Promise.reject('Supabase client not initialized');

    return this.supabase.auth.getSession().then(({ data, error }) => {
      if (error) throw error;
      if (data?.session) {
        // Guardar datos del usuario en localStorage
        localStorage.setItem('user', JSON.stringify(data.session.user));
        return data.session;
      }
      return null;
    });
  }

  // Obtener el usuario actual
  async getCurrentUser(): Promise<{
    name: string;
    email: string;
    avatar: string;
  } | null> {
    if (!this.supabase) return Promise.resolve(null);

    return this.supabase.auth.getUser().then(({ data, error }) => {
      if (error) throw error;
      if (data.user) {
        const metadata = data.user.user_metadata as UserMetadata;
        return {
          name: metadata['name'] || 'Sin nombre',
          email: data.user.email || 'Sin correo',
          avatar: metadata['avatar'] || 'assets/images/default-avatar.png',
        };
      }
      return null;
    });
  }

    // Métodos para el menú
    async getMenuItems() {
      if (!this.supabase) return null;
      const { data, error } = await this.supabase
        .from('menu_items')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  
    async createMenuItem(item: MenuItem) {
      if (!this.supabase) return null;
      const { data, error } = await this.supabase
        .from('menu_items')
        .insert([item])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    }
  
    // Métodos para el inventario
    async getInventoryItems() {
      if (!this.supabase) return null;
      const { data, error } = await this.supabase
        .from('inventory')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  
    async createInventoryItem(item: InventoryItem) {
      if (!this.supabase) return null;
      const { data, error } = await this.supabase
        .from('inventory')
        .insert([item])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    }
  }

