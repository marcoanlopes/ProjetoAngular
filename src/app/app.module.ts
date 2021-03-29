import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { CartComponent } from './cart/cart.component';
import { MenuProductsComponent } from './products/menu-products/menu-products.component';
import { CelularesComponent } from './products/menu-products/celulares/celulares.component';
import { TabletsComponent } from './products/menu-products/tablets/tablets.component';
import { ComputadoresComponent } from './products/menu-products/computadores/computadores.component';
import { EletrodomesticosComponent } from './products/menu-products/eletrodomesticos/eletrodomesticos.component';

@NgModule({
  declarations: [						
    AppComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      ContatoComponent,
      ProductsComponent,
      AdminComponent,
      MaintenanceComponent,
      CartComponent,
      MenuProductsComponent,
      CelularesComponent,
      TabletsComponent,
      ComputadoresComponent,
      EletrodomesticosComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
