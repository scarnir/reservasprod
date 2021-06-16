import { Component, OnInit } from '@angular/core';
import { Permiso } from 'src/app/models/permiso';
import { Rol } from 'src/app/models/rol';
import { RolesService } from 'src/app/services/roles.service';
import { PermisosService } from '../../services/permisos.service';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  alert: any = [];

  selectedActualizar: number = 0;
  selectedInactivar: number = 0;
  selectedCrear: number = 0;
  

  toActualizar(){
    this.selectedActualizar = +this.selectedActualizar;
  }

  toInactivar(){
    this.selectedInactivar = +this.selectedInactivar;
  }

  toCrear(){
    this.selectedCrear = +this.selectedCrear;
  }

  selectedRol!: number;

  toNumberRol(){
    this.selectedRol = +this.selectedRol;
  }

  permiso: Permiso = {
    id: 0,
    idRol: 0,
    actualizar: 0,
    inactivar: 0,
    crear: 0,
    fecCreado: new Date(),
    fecActualizado: new Date()
  };

  permisos: any = [];

  rol: Rol = {
    id: 0,
    nombre: '',
    descripcion: '',
    estado: 1,
    fecCreado: new Date(),
    fecActualizado: new Date()
  };

  roles: any = [];

  constructor(private permisosService: PermisosService, private rolesService: RolesService) { }

  ngOnInit() {
    this.getPermisos();
    this.getRoles();
  }


  getPermisos() {
    this.permisosService.getPermisosNombres().subscribe(
      res => {
        this.permisos = res;
        console.log(this.permisos);
      },
      err => console.error(err)
    );
  }

  getRoles() {
    this.rolesService.getRoles().subscribe(
      res => {
        this.roles = res;
      },
      err => console.error(err)
    );
  }

  savePermiso(idRol: number, actualizar: number, inactivar: number, crear: number) {
    console.log(idRol);
    console.log(actualizar);
    console.log(inactivar);
    console.log(crear);
    this.permiso.idRol = idRol;
    this.permiso.actualizar = actualizar;
    this.permiso.inactivar = inactivar;
    this.permiso.crear = crear;
    console.log(this.permiso)
    this.permisosService.savePermiso(this.permiso).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getPermisos();
      },
      err => console.error(err)
    )
  }

  getPermiso(id: number) {
    if (id) {
      this.permisosService.getPermiso(id).subscribe(
        res => {
          this.permiso = res;
        },
        err => console.error(err)
      );
    }
  }

  deletePermiso(id: number) {
    console.log(id);
    this.permisosService.deletePermiso(id).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getPermisos();
      },
      err => console.error(err)
    )
  }

  // updatePermiso(idRol: number, actualizar: number, inactivar: number, crear: number) {
  //   console.log(idRol);
  //   console.log(actualizar);
  //   console.log(inactivar);
  //   console.log(crear);
  //   this.permisosService.updatePermiso(this.permiso.id, this.permiso).subscribe(
  //     res => {
  //       console.log(res);
  //       this.permiso = res;
  //       this.getPermisos();
  //     },
  //     err => console.error(err)
  //   );
  // }
}