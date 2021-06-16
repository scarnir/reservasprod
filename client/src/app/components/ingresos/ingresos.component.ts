import { Component, OnInit } from '@angular/core';
import { Ingreso } from 'src/app/models/ingreso';
import { IngresosService } from '../../services/ingresos.service';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  alert: any = [];

  ingreso: Ingreso = {
    id: 0,
    nombre: '',
    created_at: new Date(),
    updated_at: new Date()
  };

  ingresos: any = [];

  constructor(private ingresosService: IngresosService) { }

  ngOnInit() {
    this.getIngresos();
  }


  getIngresos() {
    this.ingresosService.getIngresos().subscribe(
      res => {
        this.ingresos = res;
        console.log(this.ingresos);
      },
      err => console.error(err)
    );
  }

  getIngreso(id: number) {
    console.log(id);
    if (id) {
      this.ingresosService.getIngreso(id).subscribe(
        res => {
          console.log(res);
          this.ingreso = res;
        },
        err => console.error(err)
      );
    }
  }

  saveIngreso() {
    this.ingresosService.saveIngreso(this.ingreso).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getIngresos();
      },
      err => console.error(err)
    )
  }

  updateIngreso() {
    console.log(this.ingreso.id);
    this.ingresosService.updateIngreso(this.ingreso.id, this.ingreso).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getIngresos();
      },
      err => console.error(err)
    );
  }

  deleteIngreso(id: number) {
    this.ingresosService.deleteIngreso(id).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getIngresos();
      },
      err => console.error(err)
    );
  }
}