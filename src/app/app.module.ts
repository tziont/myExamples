import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamleOneComponent } from './examle-one/examle-one.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from './shared/services/http-request.service';

@NgModule({
  declarations: [
    AppComponent,
    ExamleOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
