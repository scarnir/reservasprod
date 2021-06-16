import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Permiso } from '../models/permiso';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  API_URI = 'http://reservasystem.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getPermisos() {
    return this.http.get(`${this.API_URI}/permisos`);
  }

  getPermisosNombres() {
    return this.http.get(`${this.API_URI}/permisos/nombres`);
  }

  getPermiso(id: number) {
    return this.http.get(`${this.API_URI}/permisos/${id}`);
  }

  savePermiso(permiso: Permiso) {
    return this.http.post(`${this.API_URI}/permisos`, permiso);
  }

  updatePermiso(id: number | undefined, updatedPermiso: Permiso) {
    return this.http.put(`${this.API_URI}/permisos/${id}`, updatedPermiso);
  }

  deletePermiso(id: number) {
    return this.http.delete(`${this.API_URI}/permisos/${id}`);
  }

}