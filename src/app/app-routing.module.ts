import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ProductsComponent } from './products/products.component';
import { CelularesComponent } from './products/menu-products/celulares/celulares.component';
import { ComputadoresComponent } from './products/menu-products/computadores/computadores.component';
import { EletrodomesticosComponent } from './products/menu-products/eletrodomesticos/eletrodomesticos.component';
import { TabletsComponent } from './products/menu-products/tablets/tablets.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'produto', component: ProductsComponent},
  {path: 'administrar', component: AdminComponent},
  {path: 'manutencao', component: MaintenanceComponent},
  {path: 'carrinho', component: CartComponent},
  {path: 'celulares', component: CelularesComponent},
  {path: 'computadores', component: ComputadoresComponent},
  {path: 'eletrodomesticos', component: EletrodomesticosComponent},
  {path: 'tablets', component: TabletsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
