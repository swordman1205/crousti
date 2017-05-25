import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  LoginComponent,
  HomeComponent,
  CreateComponent,
  ShopComponent,
  AddCabinetComponent,
  EditCabinetComponent
} from './pages';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'shop/:id', component: ShopComponent },
  { path: 'shop/:id/cabinet/add', component: AddCabinetComponent },
  { path: 'shop/:id/cabinet/detail', component: EditCabinetComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
