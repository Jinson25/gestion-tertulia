import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template:` <router-outlet />`,
  styles:""
})
export class AppComponent {
  title = 'gestion-tertulia';

  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      initFlowbite();
    }
  }
  
}
