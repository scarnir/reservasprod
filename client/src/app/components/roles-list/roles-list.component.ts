import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/models/rol';
import { RolesService } from '../../services/roles.service';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  alert: any = [];

  rol: Rol = {
    id: 0,
    nombre: '',
    descripcion: '',
    estado: 1,
    fecCreado: new Date(),
    fecActualizado: new Date()
  };

  roles: any = [];

  status: boolean = false;

  constructor(private rolesService: RolesService) { }

  ngOnInit() {
    this.getRoles();
  }


  getRoles() {
    this.rolesService.getRoles().subscribe(
      res => {
        this.roles = res;
        console.log(this.roles);
      },
      err => console.error(err)
    );
  }

  saveRol() {
    this.rolesService.saveRol(this.rol).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getRoles();
      },
      err => console.error(err)
    )
  }

  getRol(id: number) {
    console.log(id);
    if (id) {
      this.rolesService.getRol(id).subscribe(
        res => {
          console.log(res);
          this.rol = res;
        },
        err => console.error(err)
      );
    }
  }

  updateRol() {
    console.log(this.rol.id);
    this.rolesService.updateRol(this.rol.id, this.rol).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getRoles();
      },
      err => console.error(err)
    );
  }

  // inactivateRol(rol: Rol) {
  //   this.rol = rol;
  //   this.rol.id = rol.id;
  //   if (this.rol.estado == 0) {
  //     this.rol.estado = 1;
  //     this.status = true;
  //   } else {
  //     this.rol.estado = 0;
  //     this.status = false;
  //   }
    
  //   this.rolesService.updateRol(this.rol.id, this.rol).subscribe(
  //     res => {
  //       console.log(res);
  //       this.rol = res;
  //       this.getRoles();
  //     },
  //     err => console.error(err)
  //   );
  // }

  deleteRol(id: number) {
    this.rolesService.deleteRol(id).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getRoles();
      },
      err => console.error(err)
    );
  }
}