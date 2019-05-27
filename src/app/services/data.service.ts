import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Cidade } from '../models/cidade.model';
import { Escola } from '../models/escola.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getCidades(){
    return this.http.get<Cidade[]>("./assets/cidades.json")
  }

  getEscolas(){
    return this.http.get<Escola[]>("./assets/escolas.json")
  }


}
