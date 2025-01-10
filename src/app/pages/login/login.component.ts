import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private supabaseService: SupabaseService, private router: Router) {}

  async loginWithGoogle() {
    try {
      const { data, error } = await this.supabaseService.signInWithGoogle();
      if (error) throw error;
      if (data) {
      }
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  }
}