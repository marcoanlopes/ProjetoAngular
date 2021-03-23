import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent

  },
  {
    path: 'contato', component: ContatoComponent
  },
  {
    path: 'produto', component: ProductsComponent
  },
  {
    path: 'administrar', component: AdminComponent
  },
  {
    path: 'manutencao', component: MaintenanceComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
