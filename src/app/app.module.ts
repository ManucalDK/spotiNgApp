import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './componebts/home/home.component';
import { SearchComponent } from './componebts/search/search.component';
import { ArtistaComponent } from './componebts/artista/artista.component';
import { NavbarComponent } from './componebts/shared/navbar/navbar.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
