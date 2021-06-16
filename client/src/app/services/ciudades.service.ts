import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {
  API_URI = 'http://reservasystem.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getCiudades() {
    return this.http.get(`${this.API_URI}/ciudades`);
  }

  getCiudad(id: number) {
    return this.http.get(`${this.API_URI}/ciudades/${id}`);
  }

  saveCiudad(ciudad: Ciudad) {
    return this.http.post(`${this.API_URI}/ciudades`, ciudad);
  }

  updateCiudad(id: number | undefined, updatedCiudad: Ciudad) {
    return this.http.put(`${this.API_URI}/ciudades/${id}`, updatedCiudad);
  }

  deleteCiudad(id: number | undefined) {
    return this.http.delete(`${this.API_URI}/ciudades/${id}`);
  }
}