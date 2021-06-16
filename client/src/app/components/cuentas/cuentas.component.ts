import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/models/cuenta';
import { Banco } from 'src/app/models/banco';
import { CuentasService } from '../../services/cuentas.service';
import { BancosService } from '../../services/bancos.service';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  alert: any = [];

  cuenta: Cuenta = {
    id: 0,
    nro_cuenta: 0,
    id_banco: 0,
    descripcion: '',
    nombre_titular: '',
    telefono: '',
    correo: '',
    fax: '',
    created_at: new Date(),
    updated_at: new Date()
  };

  cuentas: any = [];

  banco: Banco = {
    id: 0,
    nombre: '',
    created_at: new Date(),
    updated_at: new Date()
  };

  bancos: any = [];

  status: boolean = false;

  selectedBanco!: number;

  toNumberBanco(){
    this.selectedBanco = +this.selectedBanco;
  }

  constructor(private cuentasService: CuentasService, private bancosService: BancosService) { }

  ngOnInit() {
    this.getCuentas();
    this.getCuentasNombre();
    this.getBancos();
  }


  getCuentas() {
    this.cuentasService.getCuentas().subscribe(
      res => {
        this.cuentas = res;
        console.log(this.cuentas);
      },
      err => console.error(err)
    );
  }

  getCuentasNombre() {
    this.cuentasService.getCuentasNombre().subscribe(
      res => {
        this.cuentas = res;
        console.log(this.cuentas);
      },
      err => console.error(err)
    );
  }

  getBancos() {
    this.bancosService.getBancos().subscribe(
      res => {
        this.bancos = res;
        console.log(this.bancos);
      },
      err => console.error(err)
    );
  }

  saveCuenta(idBanco: number) {
    this.cuenta.id_banco = idBanco;
    this.cuentasService.saveCuenta(this.cuenta).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getCuentas();
      },
      err => console.error(err)
    )
  }

  getCuenta(id: number) {
    console.log(id);
    if (id) {
      this.cuentasService.getCuenta(id).subscribe(
        res => {
          console.log(res);
          this.cuenta = res;
        },
        err => console.error(err)
      );
    }
  }

  updateCuenta(idBanco: number) {
    this.cuenta.id_banco = idBanco;
    this.cuentasService.updateCuenta(this.cuenta.id, this.cuenta).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getCuentas();
      },
      err => console.error(err)
    );
  }

  deleteCuenta(id: number) {
    this.cuentasService.deleteCuenta(id).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getCuentas();
      },
      err => console.error(err)
    );
  }
}
