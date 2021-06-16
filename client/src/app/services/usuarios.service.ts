import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI = 'http://reservasystem.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${this.API_URI}/usuarios`);
  }

  getUsuario(id: number) {
    return this.http.get(`${this.API_URI}/usuarios/${id}`);
  }

  saveUsuario(usuario: Usuario) {
    return this.http.post(`${this.API_URI}/usuarios`, usuario);
  }

  updateUsuario(id: number | undefined, updatedUsuario: Usuario) {
    return this.http.put(`${this.API_URI}/usuarios/${id}`, updatedUsuario);
  }

  deleteUsuario(id: number | undefined) {
    return this.http.delete(`${this.API_URI}/usuarios/${id}`);
  }
}
