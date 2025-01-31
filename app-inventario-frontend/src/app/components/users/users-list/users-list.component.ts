import { Component } from '@angular/core';
import { MenuComponent } from '../../../shared/menu/menu.component';
import { MatTableModule } from '@angular/material/table';
import { UsersService } from '../../../services/users.service';
import { Users } from '../../../@types/users';

// export interface PeriodicElement {
//   id: number;
//   name: string;
//   email: string;
//   type: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, name: 'Administrador', email: 'admin@mail.com', type: 'admin'},
//   {id: 1, name: 'Operador', email: 'operador@mail.com', type: 'operador'}
// ];

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    MenuComponent,
    MatTableModule
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'type'];
  dataSource: Users[] = [];


  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
      if (!users) {
        return;
      }
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
}
