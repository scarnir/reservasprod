import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Asocrol } from '../models/asocrol';

@Injectable({
  providedIn: 'root'
})
export class AsocrolService {

  API_URI = 'http://reservasystem.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getAsocroles() {
    return this.http.get(`${this.API_URI}/asocroles/nombres`);
  }

  getAsocrol(id: number) {
    return this.http.get(`${this.API_URI}/asocroles/${id}`);
  }

  getAsocrolRol(id: number) {
    return this.http.get(`${this.API_URI}/asocroles/${id}`);
  }

  getAsocrolUsuario(id: number) {
    return this.http.get(`${this.API_URI}/asocroles/${id}`);
  }

  saveAsocrol(asocrol: Asocrol) {
    return this.http.post(`${this.API_URI}/asocroles`, asocrol);
  }

  deleteAsocrol(id: number) {
    return this.http.delete(`${this.API_URI}/asocroles/${id}`);
  }

}