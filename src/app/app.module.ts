import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NestComponent } from './nest/nest.component';
import { ZestComponent } from './zest/zest.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NestComponent,
    ZestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
