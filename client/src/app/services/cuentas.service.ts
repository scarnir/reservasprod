import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cuenta } from '../models/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {
  API_URI = 'http://reservasystem.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getCuentas() {
    return this.http.get(`${this.API_URI}/cuentas`);
  }

  getCuentasNombre() {
    return this.http.get(`${this.API_URI}/cuentas/nombre`);
  }

  getCuenta(id: number) {
    return this.http.get(`${this.API_URI}/cuentas/${id}`);
  }

  saveCuenta(cuenta: Cuenta) {
    return this.http.post(`${this.API_URI}/cuentas`, cuenta);
  }

  updateCuenta(id: number | undefined, updatedCuenta: Cuenta) {
    return this.http.put(`${this.API_URI}/cuentas/${id}`, updatedCuenta);
  }

  deleteCuenta(id: number | undefined) {
    return this.http.delete(`${this.API_URI}/cuentas/${id}`);
  }
}