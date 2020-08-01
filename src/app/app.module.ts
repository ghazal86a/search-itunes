import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './shared/services/search.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, HttpClientModule],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
