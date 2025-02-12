import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  selectedTabIndex = 0;

  constructor(private router: Router) {}

  onTabChange(event: any): void {
    this.selectedTabIndex = event.index;

    if (event.index === 0) {
      this.router.navigate(['/itens']);
    } else if (event.index === 1) {
      this.router.navigate(['/usuarios']);
    }
  }

  ngOnInit(): void {
    const currentRoute = this.router.url;
    if (currentRoute.includes('/itens')) {
      this.selectedTabIndex = 0;
    } else if (currentRoute.includes('/usuarios')) {
      this.selectedTabIndex = 1;
    }
  }
}
