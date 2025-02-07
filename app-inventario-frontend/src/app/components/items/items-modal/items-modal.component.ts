import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Item } from '../../../shared/interfaces/items';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-items-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './items-modal.component.html',
  styleUrl: './items-modal.component.css'
})
export class ItemsModalComponent {
  itemName: string = '';
  itemAmount: string = '';
  itemDescription: string = '';
  isNewItem: boolean = false;
  item: Item;

  constructor(
    public dialogRef: MatDialogRef<ItemsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: Item, isNewItem: boolean }
  ) {
    this.item = { ...data.item };
    this.isNewItem = data.isNewItem;
  }

  ngOnInit() {
    if (!this.isNewItem && this.item) {
      this.itemName = this.item.name || '';
      this.itemAmount = this.item.amount?.toString() || '';
      this.itemDescription = this.item.description || '';
    }
  }

  onSave() {
    const item: any = {
      nome: this.itemName,
      quantidade: this.itemAmount,
      descricao: this.itemDescription
    };
  
    if (this.item && this.item.id) {
      item['id'] = this.item.id;
    }
  
    this.dialogRef.close({ action: 'save', item: item });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    const item = {
      id: this.item.id,
      nome: this.itemName,
      quantidade: this.itemAmount,
      descricao: this.itemDescription
    };
    this.dialogRef.close({ action: 'delete', item: item });
  }
}
