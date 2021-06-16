import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/models/tarjeta';
import { TarjetasService } from '../../services/tarjetas.service';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  alert: any = [];

  tarjeta: Tarjeta = {
    id: 0,
    nombre: '',
    created_at: new Date(),
    updated_at: new Date()
  };

  tarjetas: any = [];

  status: boolean = false;

  constructor(private tarjetasService: TarjetasService) { }

  ngOnInit() {
    this.getTarjetas();
  }


  getTarjetas() {
    this.tarjetasService.getTarjetas().subscribe(
      res => {
        this.tarjetas = res;
        console.log(this.tarjetas);
      },
      err => console.error(err)
    );
  }

  saveTarjeta() {
    this.tarjetasService.saveTarjeta(this.tarjeta).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getTarjetas();
      },
      err => console.error(err)
    )
  }

  getTarjeta(id: number) {
    console.log(id);
    if (id) {
      this.tarjetasService.getTarjeta(id).subscribe(
        res => {
          console.log(res);
          this.tarjeta = res;
        },
        err => console.error(err)
      );
    }
  }

  updateTarjeta() {
    console.log(this.tarjeta.id);
    this.tarjetasService.updateTarjeta(this.tarjeta.id, this.tarjeta).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getTarjetas();
      },
      err => console.error(err)
    );
  }

  deleteTarjeta(id: number) {
    this.tarjetasService.deleteTarjeta(id).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getTarjetas();
      },
      err => console.error(err)
    );
  }
}
