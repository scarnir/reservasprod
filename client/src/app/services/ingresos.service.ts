import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Ingreso } from '../models/ingreso';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  API_URI = 'http://reservasystem.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getIngresos() {
    return this.http.get(`${this.API_URI}/ingresos`);
  }

  getIngreso(id: number) {
    return this.http.get(`${this.API_URI}/ingresos/${id}`);
  }

  saveIngreso(ingreso: Ingreso) {
    return this.http.post(`${this.API_URI}/ingresos`, ingreso);
  }

  updateIngreso(id: number | undefined, updatedIngreso: Ingreso) {
    return this.http.put(`${this.API_URI}/ingresos/${id}`, updatedIngreso);
  }

  deleteIngreso(id: number | undefined) {
    return this.http.delete(`${this.API_URI}/ingresos/${id}`);
  }
}