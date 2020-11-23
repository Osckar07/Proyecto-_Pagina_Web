import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MarcaComponent } from './marca/marca.component';
import { TendenciasComponent } from './tendencias/tendencias.component';
import { SesionComponent } from './sesion/sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { VendidosComponent } from './vendidos/vendidos.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ProntoComponent } from './pronto/pronto.component';
import { CatalogohombreComponent } from './catalogohombre/catalogohombre.component';
import { CatalogomujerComponent } from './catalogomujer/catalogomujer.component';
import { CatalogoniniosComponent } from './catalogoninios/catalogoninios.component';
import { FormsModule } from '@angular/forms';
import { Comprarproducto1Component } from './comprarproducto1/comprarproducto1.component';
import { Comprarproducto2Component } from './comprarproducto2/comprarproducto2.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MarcaComponent,
    TendenciasComponent,
    SesionComponent,
    RegistroComponent,
    NovedadesComponent,
    VendidosComponent,
    OfertasComponent,
    ProntoComponent,
    CatalogohombreComponent,
    CatalogomujerComponent,
    CatalogoniniosComponent,
    Comprarproducto1Component,
    Comprarproducto2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
