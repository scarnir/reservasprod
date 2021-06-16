import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  API_URI = 'http://reservasystem.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get(`${this.API_URI}/roles`);
  }

  getRol(id: number) {
    return this.http.get(`${this.API_URI}/roles/${id}`);
  }

  saveRol(rol: Rol) {
    return this.http.post(`${this.API_URI}/roles`, rol);
  }

  updateRol(id: number | undefined, updatedRol: Rol) {
    return this.http.put(`${this.API_URI}/roles/${id}`, updatedRol);
  }

  deleteRol(id: number | undefined) {
    return this.http.delete(`${this.API_URI}/roles/${id}`);
  }
}