import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleListComponent } from './title/title-list/title-list.component';
import { TitleDetailsComponent } from './title/title-details/title-details.component';
import { TitleFormComponent } from './title/title-form/title-form.component';
import { NavComponent } from './shared/nav/nav.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleListComponent,
    TitleDetailsComponent,
    TitleFormComponent,
    NavComponent,
    PageTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
