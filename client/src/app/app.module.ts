// Módulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbAlert } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';

import { UsuariosService } from './services/usuarios.service';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { AsocrolComponent } from './components/asocrol/asocrol.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ConceptosComponent } from './components/conceptos/conceptos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsuariosListComponent,
    RolesListComponent,
    AsocrolComponent,
    PermisosComponent,
    CiudadesComponent,
    ReservasComponent,
    RegistroComponent,
    ConceptosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FontAwesomeModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
