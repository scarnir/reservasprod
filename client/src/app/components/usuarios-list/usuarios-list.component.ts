import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Ciudad } from 'src/app/models/ciudad';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { UsuariosService } from '../../services/usuarios.service';
import { CiudadesService } from '../../services/ciudades.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {
  
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;


  alert: any = [];


  close() {
    this.alert.splice(this.alert.indexOf(alert), 1);
  }

  usuario: Usuario = {
    id: 0,
    usuario: '',
    password: '',
    nombre_completo: '',
    phone: '',
    id_ciudad: 0,
    estado: 1,
    fecCreado: new Date(),
    fecActualizado: new Date()
  };

  usuarios: any = [];

  ciudad: Ciudad = {
    id: 0,
    ciudad: '',
    created_at: new Date(),
    updated_at: new Date()
  };

  ciudades: any = [];

  selectedCiudad!: number;

  toNumberCiudad(){
    this.selectedCiudad = +this.selectedCiudad;
  }

  status: boolean = false;

  timer: any;
  
  //alert: any = '';

  constructor(private usuariosService: UsuariosService, private ciudadesService: CiudadesService) {  }

  @ViewChild('staticAlert', { static: false })
  staticAlert!: NgbAlert;
  

  ngOnInit() {
    this.getUsuarios();
    this.getCiudades();
  }

  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
      },
      err => console.error(err)
    );
  }

  getCiudades() {
    this.ciudadesService.getCiudades().subscribe(
      res => {
        this.ciudades = res;
      },
      err => console.error(err)
    );
  }

  saveUsuario(id:number) {
    this.usuario.id_ciudad = id;
    this.usuariosService.saveUsuario(this.usuario).subscribe(
      res => {
        this.alert = res;
        console.log(res);
        this.timer = setTimeout(() => this.staticAlert.close(), 5000);
        this.getUsuarios();
      },
      err => console.error(err)
    )
  }

  getUsuario(id: number) {
    if (id) {
      this.usuariosService.getUsuario(id).subscribe(
        res => {
          console.log(res);
          this.usuario = res;
        },
        err => console.error(err)
      );
    }
  }

  updateUsuario(id:number) {
    this.usuario.id_ciudad = id;
    clearTimeout(this.timer);
    console.log(this.usuario.id);
    this.usuariosService.updateUsuario(this.usuario.id, this.usuario).subscribe(
      res => {
        this.alert = res;
        setTimeout(() => this.staticAlert.close(), 5000);
        this.getUsuarios();
      },
      err => this.alert = err.error
    );
  }

  deleteUsuario(id: number) {
    clearTimeout(this.timer);
    console.log(this.timer);
    this.usuariosService.deleteUsuario(id).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        setTimeout(() => this.staticAlert.close(), 5000);
        this.getUsuarios();
      },
      err => this.alert = err.error
    );
  }

  inactivateUsuario(usuario: Usuario) {
    this.usuario = usuario;
    this.usuario.id = usuario.id;
    if (this.usuario.estado == 0) {
      this.usuario.estado = 1;
      this.status = true;
    } else {
      this.usuario.estado = 0;
      this.status = false;
    }
    
    this.usuariosService.updateUsuario(this.usuario.id, this.usuario).subscribe(
      res => {
        console.log(res);
        this.usuario = res;
        this.getUsuarios();
      },
      err => console.error(err)
    );
  }

}
