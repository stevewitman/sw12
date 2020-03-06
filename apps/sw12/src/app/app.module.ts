import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@bb/material';
import { UiToolbarModule } from '@bb/ui-toolbar';
import { CoreDataModule } from '@bb/core-data';
import { CoreStateModule } from '@bb/core-state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    UiToolbarModule,
    CoreDataModule,
    CoreStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
