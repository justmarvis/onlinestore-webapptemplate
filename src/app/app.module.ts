import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Call2actionComponent } from './home/call2action/call2action.component';
import { ImageGridComponent } from './home/image-grid/image-grid.component';
import { DirectoryComponent } from './home/directory/directory.component';
import { SiteNameComponent } from './home/site-name/site-name.component';
import { InformantComponent } from './home/informant/informant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Call2actionComponent,
    ImageGridComponent,
    DirectoryComponent,
    SiteNameComponent,
    InformantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
