import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { restaurante, categorias, platos, menu_diarios } from '../../../data';

interface Variant {
  id: number;
  variant_name: string;
  stock: number;
  price_modifier: string;
  status: string;
}

interface Plato {
  id: number;
  name: string;
  short_description: string;
  price: string;
  price_with_discount: string;
  discount: string;
  images: { image_url: string }[];
  variants: Variant[];
  disponible?: boolean;
  vegetariano?: boolean;
  vegano?: boolean;
  categoria_id?: number;
}

interface DailySpecial {
  id: number;
  nombre: string;
  descripcion: string;
  plato_id: number;
  precio_especial: number;
  disponible: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurantInfo = restaurante[0]?.restaurante;
  categories = categorias[0]?.categorias_platos || [];
  dishes: Plato[] = [];
  dailyMenus = menu_diarios[0]?.menus_diarios || [];
  activeSection: string = 'menu';
  selectedCategory: number | null = null;
  defaultImageUrl = 'https://www.atlantiasearch.com/images/ProductImages/SI_PRUEBA_PDV.jpg';

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    try {
      // Initialize dishes with API structure
      if (platos?.[0]?.platos) {
        this.dishes = platos[0].platos.map(plato => ({
          id: plato.id,
          name: plato.nombre,
          short_description: plato.descripcion,
          price: plato.precio.toString(),
          price_with_discount: plato.precio.toString(), // No discount by default
          discount: '0',
          images: [{ image_url: plato.imagen || this.defaultImageUrl }],
          variants: [], // No variants by default
          disponible: plato.disponible,
          vegetariano: plato.vegetariano,
          vegano: plato.vegano,
          categoria_id: plato.categoria_id
        }));
        console.log('Dishes loaded:', this.dishes.length);
      } else {
        console.error('No dishes found in data');
      }

      // Initialize daily menus
      if (this.dailyMenus.length > 0) {
        console.log('Daily menus loaded:', this.dailyMenus.length);
      } else {
        console.error('No daily menus found in data');
      }

      // Set initial category
      if (this.categories.length > 0) {
        this.selectedCategory = this.categories[0].id;
      }
    } catch (error) {
      console.error('Error initializing data:', error);
    }
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

  get todaySpecial(): DailySpecial | null {
    if (!this.dailyMenus || this.dailyMenus.length === 0) return null;
    const special = this.dailyMenus[0]?.especial_del_dia;
    return special || null;
  }

  getSpecialDish(id: number): Plato | null {
    return this.dishes.find(dish => dish.id === id) || null;
  }

  get currentSpecialDish(): Plato | null {
    if (!this.todaySpecial) return null;
    return this.getSpecialDish(this.todaySpecial.plato_id);
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category?.nombre || '';
  }
}
