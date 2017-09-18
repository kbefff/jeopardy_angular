import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JeopardyService } from './jeopardy.service';
import { ScoreBoardComponent } from './score-board/score-board.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoreBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    JeopardyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
