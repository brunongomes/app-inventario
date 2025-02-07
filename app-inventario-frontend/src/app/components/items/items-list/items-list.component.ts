import { Component } from '@angular/core';
import { MenuComponent } from '../../../shared/menu/menu.component';
import { MatTableModule } from '@angular/material/table';
import { ItemsService } from '../../../services/items.service';
import { Items } from '../../../@types/items';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ItemsModalComponent } from '../items-modal/items-modal.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [
    MenuComponent,
    MatTableModule,
    ItemsModalComponent,
    MatIconModule
  ],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  displayedColumns: string[] = ['name', 'amount', 'actions'];
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
      data: { item: {}, isNewItem: true }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.itemsService.createItem(result.item).subscribe(() => {
        this.loadItems();
      });
    });
  }

  openViewItemDialog(item: Items) {
    const dialogRef = this.dialog.open(ItemsModalComponent, {
      width: '500px',
      data: { item: item, isNewItem: false }
    });

    console.log(item);
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      if (result.action === 'delete') {
        console.log('ACESSOU A FUNÇÃO DELETE: ', result);
        this.itemsService.deleteItem(result.item.id).subscribe(() => {
          this.loadItems();
        });
        return;
      }
      
      if (result.action === 'save') {
        console.log('ACESSOU A FUNÇÃO EDITAR: ', result);
        this.itemsService.updateItem(result.item).subscribe(() => {
          this.loadItems();
        });
        return;
      }
    });
  }
}
