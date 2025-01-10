import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../../../services/supabase.service';
import { MenuItem } from '../../../shared/interfaces/models.interface';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  menuForm: FormGroup;

  constructor(
    private supabase: SupabaseService,
    private fb: FormBuilder
  ) {
    this.menuForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: [''],
      category: ['', Validators.required]
    });
  }

  async ngOnInit() {
    await this.loadMenuItems();
  }

  async loadMenuItems() {
    try {
      this.menuItems = await this.supabase.getMenuItems() || [];
    } catch (error) {
      console.error('Error al cargar menú:', error);
    }
  }

  async onSubmit() {
    if (this.menuForm.valid) {
      try {
        const user = await this.supabase.getCurrentUser();
        if (!user) throw new Error('Usuario no autenticado');

        const menuItem: MenuItem = {
          ...this.menuForm.value,
        };

        await this.supabase.createMenuItem(menuItem);
        await this.loadMenuItems();
        this.menuForm.reset();
      } catch (error) {
        console.error('Error al crear item:', error);
      }
    }
  }
}
