import { Component, OnInit } from '@angular/core';
import { Asocrol } from 'src/app/models/asocrol';
import { Rol } from 'src/app/models/rol';
import { Usuario } from 'src/app/models/usuario';
import { AsocrolService } from '../../services/asocrol.service';
import { RolesService } from '../../services/roles.service';
import { UsuariosService } from '../../services/usuarios.service';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-asocrol',
  templateUrl: './asocrol.component.html',
  styleUrls: ['./asocrol.component.css']
})
export class AsocrolComponent implements OnInit {

  faPlus = faPlus;
  faTrash = faTrash;

  alert: any = [];

  asocrol: Asocrol = {
    id: 0,
    idRol: 0,
    idUsuario: 0,
    fecCreado: new Date(),
    fecActualizado: new Date()
  };

  rol: Rol = {
    id: 0,
    nombre: '',
    descripcion: '',
    estado: 1,
    fecCreado: new Date(),
    fecActualizado: new Date()
  };

  usuario: Usuario = {
    id: 0,
    usuario: '',
    password: '',
    estado: 1,
    fecCreado: new Date(),
    fecActualizado: new Date()
  };

  asocroles: any = [];
  roles: any = [];
  usuarios: any = [];

  selectedUsuario!: number;
  selectedRol!: number;

  toNumberUsuario(){
    this.selectedUsuario = +this.selectedUsuario;
  }

  toNumberRol(){
    this.selectedRol = +this.selectedRol;
  }

  constructor(private asocrolService: AsocrolService, private rolesService: RolesService, private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.getAsocroles();
    this.getRoles();
    this.getUsuarios();
  }


  getAsocroles() {
    this.asocrolService.getAsocroles().subscribe(
      res => {
        this.asocroles = res;
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

  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
      },
      err => console.error(err)
    );
  }

  saveAsocrol(idUsuario: number, idRol: number) {
    console.log(this.asocrol);
    console.log(idUsuario);
    console.log(idRol);
    this.asocrol.idUsuario = idUsuario;
    this.asocrol.idRol = idRol;
    this.asocrolService.saveAsocrol(this.asocrol).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getAsocroles();
      },
      err => console.error(err)
    )
  }

  deleteAsocrol(id: number) {
    console.log(id);
    this.asocrolService.deleteAsocrol(id).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getAsocroles();
      },
      err => console.error(err)
    )
  }

  // getRol(id: number, rol: Rol) {
  //   console.log(id);
  //   if (id) {
  //     this.rolesService.getRol(id).subscribe(
  //       res => {
  //         console.log(res);
  //         console.log(rol);
  //         rol = res;
  //         //this.usuariosService.updateUsuario(id, usuario);
  //       },
  //       err => console.error(err)
  //     );
  //   }
  // }
}