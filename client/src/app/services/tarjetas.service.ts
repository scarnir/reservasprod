import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Tarjeta } from '../models/tarjeta';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {
  API_URI = 'http://reservasystem.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getTarjetas() {
    return this.http.get(`${this.API_URI}/tarjetas`);
  }

  getTarjeta(id: number) {
    return this.http.get(`${this.API_URI}/tarjetas/${id}`);
  }

  saveTarjeta(tarjeta: Tarjeta) {
    return this.http.post(`${this.API_URI}/tarjetas`, tarjeta);
  }

  updateTarjeta(id: number | undefined, updatedTarjeta: Tarjeta) {
    return this.http.put(`${this.API_URI}/tarjetas/${id}`, updatedTarjeta);
  }

  deleteTarjeta(id: number | undefined) {
    return this.http.delete(`${this.API_URI}/tarjetas/${id}`);
  }
}