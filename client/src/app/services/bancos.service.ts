import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Banco } from '../models/banco';

@Injectable({
  providedIn: 'root'
})
export class BancosService {
  API_URI = 'http://reservasystem.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getBancos() {
    return this.http.get(`${this.API_URI}/bancos`);
  }

  getBanco(id: number) {
    return this.http.get(`${this.API_URI}/bancos/${id}`);
  }

  saveBanco(banco: Banco) {
    return this.http.post(`${this.API_URI}/bancos`, banco);
  }

  updateBanco(id: number | undefined, updatedBanco: Banco) {
    return this.http.put(`${this.API_URI}/bancos/${id}`, updatedBanco);
  }

  deleteBanco(id: number | undefined) {
    return this.http.delete(`${this.API_URI}/bancos/${id}`);
  }
}