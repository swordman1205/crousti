import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule, ModalModule } from 'ng2-bootstrap';
import { SelectModule } from 'ng2-select';

import { routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { 
  LoginComponent,
  HomeComponent,
  CreateComponent,
  ShopComponent,
  AddCabinetComponent,
  EditCabinetComponent,
  EditTemplateComponent
} from './pages';

import { 
  NavbarComponent,
  ShopListComponent,
  CabinetTemplateComponent,
  CabinetConfigurationComponent,
  ProductCollectorComponent,
  TemplateDrawerComponent
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
    EditTemplateComponent,
    // components
    NavbarComponent,
    ShopListComponent,
    CabinetTemplateComponent,
    CabinetConfigurationComponent,
    ProductCollectorComponent,
    TemplateDrawerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    SelectModule,
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
