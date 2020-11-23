import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MarcaComponent } from './marca/marca.component';
import { TendenciasComponent } from './tendencias/tendencias.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { NovedadesComponent } from './novedades/novedades.component'
import { VendidosComponent } from './vendidos/vendidos.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ProntoComponent } from './pronto/pronto.component';
import { CatalogohombreComponent } from './catalogohombre/catalogohombre.component';
import { CatalogomujerComponent } from './catalogomujer/catalogomujer.component';
import { CatalogoniniosComponent } from './catalogoninios/catalogoninios.component';
import { Comprarproducto1Component } from './comprarproducto1/comprarproducto1.component';
import { Comprarproducto2Component } from './comprarproducto2/comprarproducto2.component';

const routes: Routes = [
  {path:'',redirectTo:'Inicio',pathMatch:'full'},
{path:'Inicio',component:InicioComponent},
{path:'Marca',component:MarcaComponent},
{path:'Tendencias',component:TendenciasComponent},
{path:'sesion',component:SesionComponent},
{path:'registro',component:RegistroComponent},
{path:'novedades',component:NovedadesComponent},
{path:'vendidos',component:VendidosComponent},
{path:'ofertas',component:OfertasComponent},
{path:'pronto',component:ProntoComponent},
{path:'catalogohombre',component:CatalogohombreComponent},
{path:'catalogomujer',component:CatalogomujerComponent},
{path:'catalogoninios',component:CatalogoniniosComponent},
{path:'comprarproducto1',component:Comprarproducto1Component},
{path:'comprarproducto2',component:Comprarproducto2Component} 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
