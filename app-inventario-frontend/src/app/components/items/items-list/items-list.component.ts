import { Component } from '@angular/core';
import { MenuComponent } from '../../../shared/menu/menu.component';
import { MatTableModule } from '@angular/material/table';
import { ItemsService } from '../../../services/items.service';
import { Items } from '../../../@types/items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [
    MenuComponent,
    MatTableModule
  ],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  displayedColumns: string[] = ['id', 'name', 'amount'];
  dataSource: Items[] = [];


  constructor(private itemsService: ItemsService, private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      this.router.navigate(['/login']);
    }

    this.itemsService.getItems().subscribe(items => {
      console.log(items);
      if (!items) {
        return;
      }
      this.dataSource = items.map(item => {
        return {
          id: item._id,
          name: item.descricao,
          amount: item.quantidade
        };
      })
    });
  }
}
