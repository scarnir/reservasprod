import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { AsocrolComponent } from './components/asocrol/asocrol.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { ConceptosComponent } from './components/conceptos/conceptos.component';


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
    path: 'registros',
    component: RegistroComponent
  },
  {
    path: 'reservas',
    component: ReservasComponent
  },
  {
    path: 'conceptos',
    component: ConceptosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
