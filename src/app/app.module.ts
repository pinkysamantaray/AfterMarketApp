import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EquipmentDetailsComponent } from './equipment-details/equipment-details.component';
import { MapviewDirective } from './mapview.directive';

const appRoutes: Routes = [
  { path: 'equipmentDetails', component: EquipmentDetailsComponent },
  {
    path: 'home',
    component: DashboardComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EquipmentDetailsComponent,
    MapviewDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
