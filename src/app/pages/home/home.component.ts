import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { categorias, platos, menu_diarios, restaurante } from '../../../data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  restaurantInfo = restaurante[0].restaurante;
  categories = categorias[0].categorias_platos;
  dishes = platos[0].platos;
  dailyMenus = menu_diarios[0].menus_diarios;
  activeSection: string = 'home';
  selectedCategory: number | null = null;

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    // Los datos ya están cargados desde los imports
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  filterDishesByCategory(categoryId: number) {
    this.selectedCategory = categoryId;
  }

  get filteredDishes() {
    if (!this.selectedCategory) return this.dishes;
    return this.dishes.filter(dish => dish.categoria_id === this.selectedCategory);
  }

  get todaySpecial() {
    return this.dailyMenus[0]?.especial_del_dia;
  }

  getSpecialDish(id: number) {
    return this.dishes.find(dish => dish.id === id);
  }
}
