import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UiModule,
    NgxSpinnerModule,
  ]  ,
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
