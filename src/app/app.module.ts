import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule, ModalModule } from 'ng2-bootstrap';

import { routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { 
  LoginComponent,
  HomeComponent,
  CreateComponent,
  ShopComponent,
  AddCabinetComponent,
  EditCabinetComponent
} from './pages';

import { 
  NavbarComponent,
  ShopListComponent,
  CabinetTemplateComponent,
  CabinetConfigurationComponent,
  ProductCollectorComponent
} from './components';

import { 
  LoginService,
  ShopService,
} from './services';

@NgModule({
  declarations: [
    AppComponent,
    // pages
    LoginComponent,
    HomeComponent,
    CreateComponent,
    ShopComponent,
    AddCabinetComponent,
    EditCabinetComponent,
    // components
    NavbarComponent,
    ShopListComponent,
    CabinetTemplateComponent,
    CabinetConfigurationComponent,
    ProductCollectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    routing
  ],
  providers: [
    appRoutingProviders,
    LoginService,
    ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
