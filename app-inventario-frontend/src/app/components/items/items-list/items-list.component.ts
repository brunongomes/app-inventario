import { Component } from '@angular/core';
import { MenuComponent } from '../../../shared/menu/menu.component';
import { MatTableModule } from '@angular/material/table';
import { ItemsService } from '../../../services/items.service';
import { Items } from '../../../@types/items';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ItemsModalComponent } from '../items-modal/items-modal.component';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [
    MenuComponent,
    MatTableModule,
    ItemsModalComponent
  ],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  displayedColumns: string[] = ['name', 'amount'];
  dataSource: Items[] = [];


  constructor(private itemsService: ItemsService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      this.router.navigate(['/login']);
    }

    this.loadItems();
  };

  loadItems() {
    this.itemsService.getItems().subscribe(items => {
      this.dataSource = items.map(item => {
        return {
          id: item._id,
          name: item.nome,
          amount: item.quantidade
        };
      });
    });
  }

  openAddItemDialog() {
    const dialogRef = this.dialog.open(ItemsModalComponent, {
      width: '500px',
      data: {}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('==>', result);
      if (!result) {
        return;
      }

      this.itemsService.createItem(result).subscribe(() => {
        this.loadItems();
      });
    });
  }
}
