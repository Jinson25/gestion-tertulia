import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem, MENU_ITEMS } from '../data/restaurant-data';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }

  getAllMenuItems(): Observable<MenuItem[]> {
    return of(MENU_ITEMS);
  }

  getDailyMenu(): Observable<MenuItem[]> {
    return of(MENU_ITEMS.filter(item => item.category === 'daily'));
  }

  getALaCarteMenu(): Observable<MenuItem[]> {
    return of(MENU_ITEMS.filter(item => item.category === 'carta'));
  }

  getSpecials(): Observable<MenuItem[]> {
    return of(MENU_ITEMS.filter(item => item.category === 'special'));
  }
}
