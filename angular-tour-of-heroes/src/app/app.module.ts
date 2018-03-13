import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TechnologyDetailComponent } from './technology-detail/technology-detail.component';
import { MessageService } from './message.service';
import { TechnologyService } from './technology.service';

@NgModule({
  declarations: [
    AppComponent,
    TechnologiesComponent,
    TechnologyDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MessageService, TechnologyService],
  bootstrap: [AppComponent]
})
export class AppModule { }