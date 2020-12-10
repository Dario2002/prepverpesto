import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { IdprodottoComponent } from './idprodotto/idprodotto.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { OllareComponent } from './ollare/ollare.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProdottoComponent,
    IdprodottoComponent,
    AboutComponent,
    ProductComponent,
    OllareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
