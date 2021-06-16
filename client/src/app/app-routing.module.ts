import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { AsocrolComponent } from './components/asocrol/asocrol.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { BancosComponent } from './components/bancos/bancos.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { PagoTarjetaComponent } from './components/pago-tarjeta/pago-tarjeta.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    component: UsuariosListComponent
  },
  {
    path: 'roles',
    component: RolesListComponent
  },
  {
    path: 'asocrol',
    component: AsocrolComponent
  },
  {
    path: 'permisos',
    component: PermisosComponent
  },
  {
    path: 'ciudades',
    component: CiudadesComponent
  },
  {
    path: 'gastos',
    component: GastosComponent
  },
  {
    path: 'ingresos',
    component: IngresosComponent
  },
  {
    path: 'bancos',
    component: BancosComponent
  },
  {
    path: 'tarjetas',
    component: TarjetasComponent
  },
  {
    path: 'cuentas',
    component: CuentasComponent
  },
  {
    path: 'pagos',
    component: PagoTarjetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
