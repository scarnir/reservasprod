import { Component, OnInit } from '@angular/core';
import { Pagotarjeta } from 'src/app/models/pagotarjeta';
import { Tarjeta } from 'src/app/models/tarjeta';
import { PagoTarjetaService } from '../../services/pago-tarjeta.service';
import { TarjetasService } from '../../services/tarjetas.service';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pago-tarjeta',
  templateUrl: './pago-tarjeta.component.html',
  styleUrls: ['./pago-tarjeta.component.css']
})
export class PagoTarjetaComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  alert: any = [];

  pagotarjeta: Pagotarjeta = {
    id: 0,
    nro_tarjeta: 0,
    id_tarjeta: 0,
    descripcion: '',
    created_at: new Date(),
    updated_at: new Date()
  };

  pagotarjetas: any = [];

  tarjeta: Tarjeta = {
    id: 0,
    nombre: '',
    created_at: new Date(),
    updated_at: new Date()
  };

  tarjetas: any = [];

  status: boolean = false;

  selectedTarjeta!: number;

  toNumberTarjeta(){
    this.selectedTarjeta = +this.selectedTarjeta;
  }

  constructor(private pagoTarjetaService: PagoTarjetaService, private tarjetasService: TarjetasService) { }

  ngOnInit() {
    this.getPagos();
    this.getPagosNombre();
    this.getTarjetas();
  }


  getPagos() {
    this.pagoTarjetaService.getPagos().subscribe(
      res => {
        this.pagotarjetas = res;
        console.log(this.pagotarjetas);
      },
      err => console.error(err)
    );
  }

  getPagosNombre() {
    this.pagoTarjetaService.getPagosNombre().subscribe(
      res => {
        this.pagotarjetas = res;
        console.log(this.pagotarjetas);
      },
      err => console.error(err)
    );
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

  savePago(idTarjeta: number) {
    this.pagotarjeta.id_tarjeta = idTarjeta;
    this.pagoTarjetaService.savePago(this.pagotarjeta).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getPagos();
      },
      err => console.error(err)
    )
  }

  getPago(id: number) {
    console.log(id);
    if (id) {
      this.pagoTarjetaService.getPago(id).subscribe(
        res => {
          console.log(res);
          this.pagotarjeta = res;
        },
        err => console.error(err)
      );
    }
  }

  updatePago(idTarjeta: number) {
    this.pagotarjeta.id_tarjeta = idTarjeta;
    this.pagoTarjetaService.updatePago(this.pagotarjeta.id, this.pagotarjeta).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getPagos();
      },
      err => console.error(err)
    );
  }

  deletePago(id: number) {
    this.pagoTarjetaService.deletePago(id).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getPagos();
      },
      err => console.error(err)
    );
  }
}
