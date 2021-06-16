import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadesService } from '../../services/ciudades.service';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  alert: any = [];

  ciudad: Ciudad = {
    id: 0,
    ciudad: '',
    created_at: new Date(),
    updated_at: new Date()
  };

  ciudades: any = [];

  status: boolean = false;

  constructor(private ciudadesService: CiudadesService) { }

  ngOnInit() {
    this.getCiudades();
  }


  getCiudades() {
    this.ciudadesService.getCiudades().subscribe(
      res => {
        this.ciudades = res;
        console.log(this.ciudades);
      },
      err => console.error(err)
    );
  }

  saveCiudad() {
    this.ciudadesService.saveCiudad(this.ciudad).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getCiudades();
      },
      err => console.error(err)
    )
  }

  getCiudad(id: number) {
    console.log(id);
    if (id) {
      this.ciudadesService.getCiudad(id).subscribe(
        res => {
          console.log(res);
          this.ciudad = res;
        },
        err => console.error(err)
      );
    }
  }

  updateCiudad() {
    console.log(this.ciudad.id);
    this.ciudadesService.updateCiudad(this.ciudad.id, this.ciudad).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getCiudades();
      },
      err => console.error(err)
    );
  }

  deleteCiudad(id: number) {
    this.ciudadesService.deleteCiudad(id).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getCiudades();
      },
      err => console.error(err)
    );
  }
}