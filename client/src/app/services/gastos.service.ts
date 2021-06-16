import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Gasto } from '../models/gasto';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  API_URI = 'http://reservasystem.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getGastos() {
    return this.http.get(`${this.API_URI}/gastos`);
  }

  getGasto(id: number) {
    return this.http.get(`${this.API_URI}/gastos/${id}`);
  }

  saveGasto(gasto: Gasto) {
    return this.http.post(`${this.API_URI}/gastos`, gasto);
  }

  updateGasto(id: number | undefined, updatedGasto: Gasto) {
    return this.http.put(`${this.API_URI}/gastos/${id}`, updatedGasto);
  }

  deleteGasto(id: number | undefined) {
    return this.http.delete(`${this.API_URI}/gastos/${id}`);
  }
}