import { Component } from '@angular/core';
import { MenuDailyComponent } from '../../components/menu-daily/menu-daily.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuDailyComponent, CommonModule], // Removed unused import
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
