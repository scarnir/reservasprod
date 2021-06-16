import { Component, OnInit } from '@angular/core';
import { Gasto } from 'src/app/models/gasto';
import { GastosService } from '../../services/gastos.service';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  alert: any = [];

  gasto: Gasto = {
    id: 0,
    nombre: '',
    created_at: new Date(),
    updated_at: new Date()
  };

  gastos: any = [];

  constructor(private gastosService: GastosService) { }

  ngOnInit() {
    this.getGastos();
  }


  getGastos() {
    this.gastosService.getGastos().subscribe(
      res => {
        this.gastos = res;
        console.log(this.gastos);
      },
      err => console.error(err)
    );
  }

  getGasto(id: number) {
    console.log(id);
    if (id) {
      this.gastosService.getGasto(id).subscribe(
        res => {
          console.log(res);
          this.gasto = res;
        },
        err => console.error(err)
      );
    }
  }

  saveGasto() {
    this.gastosService.saveGasto(this.gasto).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getGastos();
      },
      err => console.error(err)
    )
  }

  updateGasto() {
    console.log(this.gasto.id);
    this.gastosService.updateGasto(this.gasto.id, this.gasto).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getGastos();
      },
      err => console.error(err)
    );
  }

  deleteGasto(id: number) {
    this.gastosService.deleteGasto(id).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getGastos();
      },
      err => console.error(err)
    );
  }
}