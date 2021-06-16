import { Component, OnInit } from '@angular/core';
import { Banco } from 'src/app/models/banco';
import { BancosService } from '../../services/bancos.service';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.css']
})
export class BancosComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  alert: any = [];

  banco: Banco = {
    id: 0,
    nombre: '',
    created_at: new Date(),
    updated_at: new Date()
  };

  bancos: any = [];

  status: boolean = false;

  constructor(private bancosService: BancosService) { }

  ngOnInit() {
    this.getBancos();
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

  saveBanco() {
    this.bancosService.saveBanco(this.banco).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getBancos();
      },
      err => console.error(err)
    )
  }

  getBanco(id: number) {
    console.log(id);
    if (id) {
      this.bancosService.getBanco(id).subscribe(
        res => {
          console.log(res);
          this.banco = res;
        },
        err => console.error(err)
      );
    }
  }

  updateBanco() {
    console.log(this.banco.id);
    this.bancosService.updateBanco(this.banco.id, this.banco).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getBancos();
      },
      err => console.error(err)
    );
  }

  deleteBanco(id: number) {
    this.bancosService.deleteBanco(id).subscribe(
      res => {
        console.log(res);
        this.alert = res;
        this.getBancos();
      },
      err => console.error(err)
    );
  }
}
