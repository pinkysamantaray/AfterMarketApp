import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EquipmentDetailsComponent } from './equipment-details/equipment-details.component';
import {} from '@types/googlemaps';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';

const appRoutes: Routes = [
  { 
    path: 'equipmentDetails', 
    component: EquipmentDetailsComponent 
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EquipmentDetailsComponent,
    LeftSidebarComponent,
    TabPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(
      appRoutes//,  { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
