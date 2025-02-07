import { Component, Inject } from '@angular/core';
import { Users } from '../../../shared/interfaces/users';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-users-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './users-modal.component.html',
  styleUrl: './users-modal.component.css'
})
export class UsersModalComponent {
  userName: string = '';
  userEmail: string = '';
  userLogin: string = '';
  userType: string = '';
  userPassword: string = '';
  userConfirmPassword?: string;
  isNewUser: boolean = false;
  user: Users;

  constructor(
    public dialogRef: MatDialogRef<UsersModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: Users, isNewUser: boolean }
  ) {
    this.user = { ...data.user };
    this.isNewUser = data.isNewUser;
  }

  ngOnInit() {
    if (!this.isNewUser && this.user) {
      this.userName = this.user.name || '';
      this.userEmail = this.user.email?.toString() || '';
      this.userLogin = this.user.email || '';
      this.userType = this.user.type || '';
    }
  }

  onSave() {
    const user: any = {
      nome: this.userName,
      email: this.userEmail,
      login: this.userLogin,
      tipo: this.userType,
      senha: this.userPassword
    };
  
    if (this.user && this.user.id) {
      user['id'] = this.user.id;
    }
  
    this.dialogRef.close({ action: 'save', user: user });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    const user = {
      id: this.user.id,
      nome: this.userName,
      email: this.userEmail,
      login: this.userLogin,
      tipo: this.userType,
      senha: this.userPassword
    };
    this.dialogRef.close({ action: 'delete', user: user });
  }
}
