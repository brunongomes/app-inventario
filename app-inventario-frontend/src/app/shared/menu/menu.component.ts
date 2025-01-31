import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
