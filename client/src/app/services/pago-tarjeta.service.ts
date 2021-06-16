import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Pagotarjeta } from '../models/pagotarjeta';

@Injectable({
  providedIn: 'root'
})
export class PagoTarjetaService {
  API_URI = 'http://reservasystem.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getPagos() {
    return this.http.get(`${this.API_URI}/pago`);
  }

  getPagosNombre() {
    return this.http.get(`${this.API_URI}/pago/nombre`);
  }

  getPago(id: number) {
    return this.http.get(`${this.API_URI}/pago/${id}`);
  }

  savePago(cuenta: Pagotarjeta) {
    return this.http.post(`${this.API_URI}/pago`, cuenta);
  }

  updatePago(id: number | undefined, updatedPago: Pagotarjeta) {
    return this.http.put(`${this.API_URI}/pago/${id}`, updatedPago);
  }

  deletePago(id: number | undefined) {
    return this.http.delete(`${this.API_URI}/pago/${id}`);
  }
}