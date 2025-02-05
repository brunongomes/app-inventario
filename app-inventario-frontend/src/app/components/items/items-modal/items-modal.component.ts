import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-items-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './items-modal.component.html',
  styleUrl: './items-modal.component.css'
})
export class ItemsModalComponent {
  itemName: string = '';
  itemAmount: string = '';
  itemDescription: string = '';

  constructor(public dialogRef: MatDialogRef<ItemsModalComponent>) {}

  onSave() {
    const newItem = {
      nome: this.itemName,
      quantidade: this.itemAmount,
      descricao: this.itemDescription
    };
    this.dialogRef.close(newItem);
  }
}
