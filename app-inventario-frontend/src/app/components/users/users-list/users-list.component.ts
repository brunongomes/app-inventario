import { Component } from '@angular/core';
import { MenuComponent } from '../../../shared/menu/menu.component';
import { MatTableModule } from '@angular/material/table';
import { UsersService } from '../../../services/users.service';
import { Users } from '../../../shared/interfaces/users';
import { UsersModalComponent } from '../users-modal/users-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    MenuComponent,
    MatTableModule,
    MatIconModule
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'email', 'type', 'actions'];
  dataSource: Users[] = [];


  constructor(private usersService: UsersService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getUsers().subscribe(users => {
      this.dataSource = users.map((user: { _id: string; nome: string; email: string; tipo: string; }) => {
        return {
          id: user._id,
          name: user.nome,
          email: user.email,
          type: user.tipo
        };
      })
    });
  }

  openAddUserDialog() {
    const dialogRef = this.dialog.open(UsersModalComponent, {
      width: '500px',
      data: { user: {}, isNewUser: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.usersService.createUser(result.user).subscribe(() => {
        this.loadUsers();
      });  
    });
  };

  openViewUserDialog(user: Users) {
    const dialogRef = this.dialog.open(UsersModalComponent, {
      width: '500px',
      data: { user: user, isNewUser: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('===>', result)
      
      if (result.action === 'save') {
        this.usersService.updateUser(result.user).subscribe(() => {
          this.loadUsers();
        });
      }

      if (result.action === 'delete') {
        this.usersService.deleteUser(result.user.id).subscribe(() => {
          this.loadUsers();
        });
      }
    });
  }
}
